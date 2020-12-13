import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import CalendarList from './CalendarList/CalendarList';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import WeekView from './WeekView/WeekView';

class Calendar extends React.Component {
  componentDidMount() {
    const { fetchCalendars } = this.props;
    fetchCalendars();
  }

  render() {
    const {
      calendars, events, selectedCalendarId, fetchThisWeeksEvents,
    } = this.props;
    console.log('events', events);
    return (
      <div className={styles.Calendar}>
        <header className={styles.Calendar_header}>
          <CalendarMonth />
        </header>
        <div className={styles.CalendarContent}>
          <nav className={styles.CalendarContent_nav}>
            <CalendarList
              calendars={calendars}
              selectedCalendarId={selectedCalendarId}
              fetchThisWeeksEvents={fetchThisWeeksEvents}
            />
          </nav>
          <main className={styles.CalendarContent_main}>
            <WeekView />
          </main>
        </div>
      </div>
    );
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
  fetchThisWeeksEvents: PropTypes.func.isRequired,
  selectedCalendarId: PropTypes.string,
};

export default Calendar;
