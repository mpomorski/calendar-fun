import { createStore } from 'redux';
import rootReducer from './rootReducer';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';

describe('rootReducer', () => {
  const store = createStore(rootReducer);

  it('should include auth state', () => {
    expect(store.getState().auth).toEqual(authReducer(undefined, {}));
  });

  it('should include calendar state', () => {
    expect(store.getState().calendar).toEqual(calendarReducer(undefined, {}));
  });
});
