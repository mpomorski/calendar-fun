import {
  SIGN_IN_PENDING, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS,
} from '../actions/auth';

const initialState = {
  authenticated: false,
  pending: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_PENDING:
      return { ...state, pending: true };
    case SIGN_IN_FAILURE:
      return { ...state, pending: false, error: true };
    case SIGN_IN_SUCCESS:
      return { ...state, pending: false, authenticated: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, pending: false, authenticated: false };
    default:
      return state;
  }
};
