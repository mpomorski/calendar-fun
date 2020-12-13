import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import CalendarList from './CalendarList/CalendarList';
import WeekView from './WeekView/WeekView';

describe('Calendar', () => {
  const defaultProps = {
    calendars: [],
    events: [],
    fetchThisWeeksEvents: () => {},
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

  it('renders CalendarMonth', () => {
    const wrapper = shallow(<Calendar {...defaultProps} />);
    const month = wrapper.find(CalendarMonth);
    expect(month).toHaveLength(1);
  });

  it('renders CalendarList', () => {
    const props = { ...defaultProps, selectedCalendarId: 'abc' };
    const wrapper = shallow(<Calendar {...props} />);
    const list = wrapper.find(CalendarList);
    expect(list).toHaveLength(1);
    const listProps = list.props();
    expect(listProps.calendars).toEqual(props.calendars);
    expect(listProps.selectedCalendarId).toEqual(props.selectedCalendarId);
    expect(listProps.fetchThisWeeksEvents).toEqual(props.fetchThisWeeksEvents);
  });

  it('renders WeekView', () => {
    const wrapper = shallow(<Calendar {...defaultProps} />);
    const week = wrapper.find(WeekView);
    expect(week).toHaveLength(1);
  });
});
