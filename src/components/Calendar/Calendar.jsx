import React from 'react';
import PropTypes from 'prop-types';

class Calendar extends React.Component {
  componentDidMount() {
    const { fetchCalendars } = this.props;
    fetchCalendars();
  }

  render() {
    const { calendars } = this.props;
    // TODO: render them
    console.log('calendars', calendars);
    return <h3>Calendar View</h3>;
  }
}

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
  fetchCalendars: PropTypes.func.isRequired,
};

export default Calendar;
