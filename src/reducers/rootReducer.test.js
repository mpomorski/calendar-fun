import { createStore } from 'redux';
import rootReducer from './rootReducer';
import authReducer from './authReducer';

describe('rootReducer', () => {
  const store = createStore(rootReducer);

  it('should include auth state', () => {
    expect(store.getState().auth).toEqual(authReducer(undefined, {}));
  });
});
