import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import CalendarListEntry from './CalendarListEntry/CalendarListEntry';
import { calendarShape } from '../../propTypes';

const CalendarList = ({ calendars, selectedCalendarId, fetchThisWeeksEvents }) => (
  <div className={styles.CalendarList}>
    <div className={styles.CalendarList_header}>CALENDARS</div>
    <div
      className={styles.CalendarList_calendars}
    >
      {calendars.map((calendar) => (
        <CalendarListEntry
          key={calendar.id}
          text={calendar.summary}
          color={calendar.backgroundColor}
          selected={calendar.id === selectedCalendarId}
          handleClick={() => fetchThisWeeksEvents(calendar.id)}
        />
      ))}
    </div>
  </div>

);

CalendarList.defaultProps = {
  selectedCalendarId: null,
};

CalendarList.propTypes = {
  calendars: PropTypes.arrayOf(calendarShape).isRequired,
  fetchThisWeeksEvents: PropTypes.func.isRequired,
  selectedCalendarId: PropTypes.string,
};

export default CalendarList;
