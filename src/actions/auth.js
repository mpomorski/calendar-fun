export const SIGN_IN_PENDING = 'SIGN_IN_PENDING';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

export const signInPending = () => ({
  type: SIGN_IN_PENDING,
});

export const signInFailure = () => ({
  type: SIGN_IN_FAILURE,
});
export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});
