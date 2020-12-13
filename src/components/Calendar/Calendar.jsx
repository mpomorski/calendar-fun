import React from 'react';
import PropTypes from 'prop-types';

class Calendar extends React.Component {
  componentDidMount() {
    const { fetchCalendars } = this.props;
    fetchCalendars();
  }

  render() {
    const { calendars, events, selectedCalendarId } = this.props;
    // TODO: render them
    console.log('calendars', calendars);
    console.log('events', events);
    console.log('selectedCalendarId', selectedCalendarId);
    return <h3>Calendar View</h3>;
  }
}

Calendar.defaultProps = {
  selectedCalendarId: null,
};

Calendar.propTypes = {
  calendars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      foregroundColor: PropTypes.string.isRequired,
      primary: PropTypes.bool,
    }),
  ).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fetchCalendars: PropTypes.func.isRequired,

  // fetchThisWeeksEvents: PropTypes.func.isRequired,
  selectedCalendarId: PropTypes.string,
};

export default Calendar;
