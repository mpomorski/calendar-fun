import { mapStateToProps } from './CalendarContainer';
import { sampleCalendars } from '../../__tests__/dataSamples';

describe('CalendarContainer', () => {
  describe('mapStateToProps', () => {
    it('should map calendar.calendars to calendars', () => {
      const expectedCalendars = sampleCalendars;
      const state = {
        calendar: {
          calendars: expectedCalendars,
        },
      };
      const props = mapStateToProps(state);
      expect(props.calendars).toBe(expectedCalendars);
    });
  });
});
