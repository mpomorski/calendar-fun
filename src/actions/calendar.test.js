import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_CALENDARS_PENDING, FETCH_CALENDARS_SUCCESS, fetchCalendars } from './calendar';

const mockStore = configureMockStore([thunk]);

const findAction = (store, type) => store.getActions().find((action) => action.type === type);

// TODO: move to common file when needed
const getAction = (store, type) => {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise((resolve) => {
    store.subscribe(() => {
      const subscribedAction = findAction(store, type);
      if (subscribedAction) resolve(subscribedAction);
    });
  });
};

const validGapiListCalendarsResponse = '{ "items": []}';

describe('calendar async actions', () => {
  let gapiListCalendarsMock;

  const mockGapiListCalendarsResponse = (body) => {
    gapiListCalendarsMock = jest.fn(() => Promise.resolve({ body }));
    window.gapi = {
      client: {
        calendar: {
          calendarList: {
            list: gapiListCalendarsMock,
          },
        },
      },
    };
  };

  beforeEach(() => {
    mockGapiListCalendarsResponse(validGapiListCalendarsResponse);
  });

  afterAll(() => {
    delete window.gapi;
  });

  describe('fetchCalendars', () => {
    it('dispatches fetchCalendarsPending action', async () => {
      const store = mockStore();

      store.dispatch(fetchCalendars());

      expect(await getAction(store, FETCH_CALENDARS_PENDING))
        .toEqual({ type: FETCH_CALENDARS_PENDING });
    });

    it('calls gapi list calendars', async () => {
      const store = mockStore();

      expect(gapiListCalendarsMock).not.toHaveBeenCalled();
      store.dispatch(fetchCalendars());
      expect(gapiListCalendarsMock).toHaveBeenCalled();
    });

    it('dispatches fetchCalendarsSuccess with parsed calendars', async () => {
      const store = mockStore();

      const gapiListCalendarsResponseBody = `
        {
          "kind": "calendar#calendarList",
          "items": [
            {
              "kind": "calendar#calendarListEntry",
              "etag": "abc",
              "id": "steve.rogers@shield.com",
              "summary": "steve.rogers@shield.com",
              "timeZone": "Europe/London",
              "colorId": "14",
              "backgroundColor": "#9fe1e7",
              "foregroundColor": "#000000",
              "selected": true,
              "accessRole": "owner",
              "defaultReminders": [],
              "notificationSettings": {},
              "primary": true
            },
            {
              "kind": "calendar#calendarListEntry",
              "etag": "def",
              "id": "avengers@shield.com",
              "summary": "Team calendar",
              "description": "All the world saving events",
              "timeZone": "Europe/London",
              "colorId": "17",
              "backgroundColor": "#9a9cff",
              "foregroundColor": "#111111",
              "selected": true,
              "accessRole": "reader",
              "defaultReminders": []
            }
          ]
        }
      `;

      const expectedCalendars = [{
        id: 'steve.rogers@shield.com',
        summary: 'steve.rogers@shield.com',
        backgroundColor: '#9fe1e7',
        foregroundColor: '#000000',
        primary: true,
      }, {
        id: 'avengers@shield.com',
        summary: 'Team calendar',
        backgroundColor: '#9a9cff',
        foregroundColor: '#111111',
      }];

      mockGapiListCalendarsResponse(gapiListCalendarsResponseBody);

      store.dispatch(fetchCalendars());

      expect(await getAction(store, FETCH_CALENDARS_SUCCESS))
        .toEqual(
          {
            type: FETCH_CALENDARS_SUCCESS,
            payload: { calendars: expectedCalendars },
          },
        );
    });
  });
});
