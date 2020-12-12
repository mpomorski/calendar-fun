import { mapStateToProps } from './GoogleAuthContainer';

const generateRandomBoolean = () => Math.random() < 0.5;

describe('GoogleAuthContainer', () => {
  describe('mapStateToProps', () => {
    it('should map auth.pending to pending', () => {
      const expectedPending = generateRandomBoolean();
      const state = {
        auth: {
          pending: expectedPending,
        },
      };
      const props = mapStateToProps(state);
      expect(props.pending).toBe(expectedPending);
    });

    it('should map auth.authenticated to authenticated', () => {
      const expectedAuthenticated = generateRandomBoolean();
      const state = {
        auth: {
          authenticated: expectedAuthenticated,
        },
      };
      const props = mapStateToProps(state);
      expect(props.authenticated).toBe(expectedAuthenticated);
    });

    it('should map auth.error to error', () => {
      const expectedError = generateRandomBoolean();
      const state = {
        auth: {
          error: expectedError,
        },
      };
      const props = mapStateToProps(state);
      expect(props.error).toBe(expectedError);
    });
  });
});
