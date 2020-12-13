import {
  getCurrentDate,
  getIsoEndOfWeek,
  getIsoStartOfWeek,
} from '../utils/dateUtils';

export const FETCH_CALENDARS_PENDING = 'FETCH_CALENDARS_PENDING';
export const FETCH_CALENDARS_SUCCESS = 'FETCH_CALENDARS_SUCCESS';
export const FETCH_EVENTS_PENDING = 'FETCH_EVENTS_PENDING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';

const gapiCalendarToCalendar = ({
  id, summary, backgroundColor, foregroundColor, primary,
}) => ({
  id, summary, backgroundColor, foregroundColor, primary,
});

const gapiEventToEvent = ({
  id, summary, start, end,
}) => ({
  id, summary, start: start.dateTime, end: end.dateTime,
});

export const fetchCalendarsPending = () => ({
  type: FETCH_CALENDARS_PENDING,
});

export const fetchCalendarsSuccess = (calendars) => ({
  type: FETCH_CALENDARS_SUCCESS,
  payload: {
    calendars,
  },
});

export const fetchEventsPending = (calendarId) => ({
  type: FETCH_EVENTS_PENDING,
  payload: {
    calendarId,
  },
});

export const fetchEventsSuccess = (calendarId, events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: {
    calendarId,
    events,
  },
});

// TODO: handle errors
export const fetchThisWeeksEvents = (calendarId) => (dispatch) => {
  const now = getCurrentDate();
  dispatch(fetchEventsPending(calendarId));
  return window.gapi.client.calendar.events.list(
    {
      calendarId,
      timeMin: getIsoStartOfWeek(now),
      timeMax: getIsoEndOfWeek(now),
    },
  ).then((response) => {
    const events = JSON.parse(response.body).items.map(gapiEventToEvent);
    dispatch(fetchEventsSuccess(calendarId, events));
  });
};

// TODO: handle errors
export const fetchCalendars = () => (dispatch) => {
  dispatch(fetchCalendarsPending());
  return window.gapi.client.calendar.calendarList.list()
    .then((response) => {
      const calendars = JSON.parse(response.body).items.map(gapiCalendarToCalendar);
      dispatch(fetchCalendarsSuccess(calendars));
      const primaryCalendar = calendars.find((calendar) => calendar.primary);
      dispatch(fetchThisWeeksEvents(primaryCalendar.id));
    });
};
