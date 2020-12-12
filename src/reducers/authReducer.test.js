import authReducer from './authReducer';
import {
  signInPending, signInFailure, signInSuccess, signOutSuccess,
} from '../actions/auth';

describe('authReducer', () => {
  const initialState = {
    authenticated: false,
    pending: false,
    error: false,
  };

  it('should return previous state for unknown action', () => {
    const previousState = { some: 'state' };
    const actualState = authReducer(previousState, { type: 'UNKNOWN_ACTION' });

    expect(actualState).toEqual(previousState);
  });

  it('should use initial state by default', () => {
    const actualState = authReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(actualState).toEqual(initialState);
  });

  describe('SIGN_IN_PENDING action', () => {
    const action = signInPending();

    it('should set pending to true', () => {
      const actualState = authReducer(initialState, action);
      expect(actualState.pending).toBe(true);
    });
  });

  describe('SIGN_IN_FAILURE action', () => {
    const action = signInFailure();
    const previousState = { ...initialState, pending: true };

    it('should set pending to false', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.pending).toBe(false);
    });

    it('should set error to true', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.error).toBe(true);
    });
  });

  describe('SIGN_IN_SUCCESS action', () => {
    const action = signInSuccess();
    const previousState = { ...initialState, pending: true };

    it('should set pending to false', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.pending).toBe(false);
    });

    it('should set authenticated to true', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.authenticated).toBe(true);
    });
  });

  describe('SIGN_OUT_SUCCESS action', () => {
    const action = signOutSuccess();
    const previousState = { ...initialState, authenticated: true };

    it('should set pending to false', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.pending).toBe(false);
    });
    it('should set authenticated to false', () => {
      const actualState = authReducer(previousState, action);
      expect(actualState.authenticated).toBe(false);
    });
  });
});
