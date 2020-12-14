import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import CalendarList from './CalendarList/CalendarList';
import CalendarMonth from './CalendarMonth/CalendarMonth';
import WeekView from './WeekView/WeekView';
import { calendarShape, eventShape } from '../propTypes';

class Calendar extends React.Component {
  componentDidMount() {
    const { fetchCalendars } = this.props;
    fetchCalendars();
  }

  render() {
    const {
      calendars, events, selectedCalendarId, fetchThisWeeksEvents,
    } = this.props;
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
            <WeekView
              events={events}
              selectedCalendar={calendars.find((calendar) => calendar.id === selectedCalendarId)}
            />
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
  calendars: PropTypes.arrayOf(calendarShape).isRequired,
  events: PropTypes.arrayOf(eventShape).isRequired,
  selectedCalendarId: PropTypes.string,
  fetchCalendars: PropTypes.func.isRequired,
  fetchThisWeeksEvents: PropTypes.func.isRequired,
};

export default Calendar;
