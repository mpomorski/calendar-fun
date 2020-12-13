export const FETCH_CALENDARS_PENDING = 'FETCH_CALENDARS_PENDING';
export const FETCH_CALENDARS_SUCCESS = 'FETCH_CALENDARS_SUCCESS';

const gapiCalendarToCalendar = ({
  id, summary, backgroundColor, foregroundColor, primary,
}) => ({
  id, summary, backgroundColor, foregroundColor, primary,
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

// TODO: handle errors
export const fetchCalendars = () => (dispatch) => {
  dispatch(fetchCalendarsPending());
  return window.gapi.client.calendar.calendarList.list(
  ).then((response) => {
    const calendars = JSON.parse(response.body).items.map(gapiCalendarToCalendar);
    dispatch(fetchCalendarsSuccess(calendars));
    // TODO find primary calendar and fetch events
  });
};
