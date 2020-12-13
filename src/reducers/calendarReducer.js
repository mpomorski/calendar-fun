import {
  FETCH_CALENDARS_PENDING,
  FETCH_CALENDARS_SUCCESS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_SUCCESS,
} from '../actions/calendar';

const initialState = {
  calendars: [],
  fetchingCalendars: false,
  selectedCalendarId: null,
  events: [],
  fetchingEvents: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CALENDARS_PENDING:
      return { ...state, fetchingCalendars: true };
    case FETCH_CALENDARS_SUCCESS:
      return {
        ...state,
        fetchingCalendars: false,
        calendars: action.payload.calendars,
      };
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        fetchingEvents: true,
        selectedCalendarId: action.payload.calendarId,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        fetchingEvents: false,
        events: action.payload.events,
        selectedCalendarId: action.payload.calendarId,
      };
    default:
      return state;
  }
};
