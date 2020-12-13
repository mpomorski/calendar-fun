import { FETCH_CALENDARS_PENDING, FETCH_CALENDARS_SUCCESS } from '../actions/calendar';

const initialState = {
  calendars: [],
  fetchingCalendars: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CALENDARS_PENDING:
      return { ...state, fetchingCalendars: true };
    case FETCH_CALENDARS_SUCCESS:
      return { ...state, fetchingCalendars: false, calendars: action.payload.calendars };
    default:
      return state;
  }
};
