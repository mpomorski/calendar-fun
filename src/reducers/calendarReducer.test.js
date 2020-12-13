import calendarReducer from './calendarReducer';
import { fetchCalendarsPending, fetchCalendarsSuccess } from '../actions/calendar';
import { sampleCalendars } from '../__tests__/dataSamples';

describe('calendarReducer', () => {
  const initialState = {
    calendars: [],
    events: [],
    fetchingCalendars: false,
    fetchingEvents: false,
    selectedCalendarId: null,
  };

  it('should return previous state for unknown action', () => {
    const previousState = { some: 'state' };
    const actualState = calendarReducer(previousState, { type: 'UNKNOWN_ACTION' });

    expect(actualState).toEqual(previousState);
  });

  it('should use initial state by default', () => {
    const actualState = calendarReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(actualState).toEqual(initialState);
  });

  describe('FETCH_CALENDARS_PENDING action', () => {
    const action = fetchCalendarsPending();

    it('should set fetchingCalendars to true', () => {
      const actualState = calendarReducer(initialState, action);
      expect(actualState.fetchingCalendars).toBe(true);
    });
  });

  describe('FETCH_CALENDARS_SUCCESS action', () => {
    const action = fetchCalendarsSuccess(sampleCalendars);
    const previousState = { ...initialState, fetchingCalendars: true };

    it('should set fetchingCalendars to false', () => {
      const actualState = calendarReducer(previousState, action);
      expect(actualState.fetchingCalendars).toBe(false);
    });

    it('should set calendars with value from action payload', () => {
      const actualState = calendarReducer(previousState, action);
      expect(actualState.calendars).toEqual(sampleCalendars);
    });
  });
});
