import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

describe('Calendar', () => {
  const defaultProps = {
    calendars: [],
    events: [],
    fetchEvents: () => {},
    fetchCalendars: () => {},
  };

  describe('when mounted', () => {
    it('dispatches fetchCalendars action', () => {
      const fetchCalendarsMock = jest.fn(() => {
      });
      const props = { ...defaultProps, fetchCalendars: fetchCalendarsMock };
      expect(fetchCalendarsMock).not.toHaveBeenCalled();
      shallow(<Calendar {...props} />);
      expect(fetchCalendarsMock).toHaveBeenCalled();
    });
  });

  it('renders Calendar view text', () => {
    const wrapper = shallow(<Calendar {...defaultProps} />);
    const header = wrapper.find('h3');
    expect(header.text()).toContain('Calendar View');
  });
});
