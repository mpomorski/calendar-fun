import React from 'react';
import { add, getDay, getHours } from 'date-fns';
import PropTypes from 'prop-types';
import { getCurrentDate, getStartOfWeek } from '../../../utils/dateUtils';
import DayHeader from './DayHeader/DayHeader';
import HourCell from './HourCell/HourCell';
import { calendarShape, eventShape } from '../../propTypes';

import styles from './styles.module.scss';

// TODO: to support overlapping events, make it a 3D array
const constructEventsGrid = (events) => {
  const eventsGrid = Array.from(Array(7), () => new Array(24));
  events.forEach((event) => {
    if (event.start) {
      const dayOfWeek = getDay(event.start);
      const hour = getHours(event.start);
      eventsGrid[dayOfWeek][hour] = event;
    }
  });
  return eventsGrid;
};

const WeekView = ({ events, selectedCalendar }) => {
  const weekStart = getStartOfWeek(getCurrentDate());
  const eventsGrid = constructEventsGrid(events);
  return (
    <div className={styles.WeekView}>
      <div className={styles.WeekView_header}>
        <DayHeader />
        {[...Array(7).keys()].map((i) => (
          <DayHeader key={i} dayBeginning={add(weekStart, { days: i })} />
        ))}
      </div>
      <div className={styles.WeekView_grid}>
        {[...Array(24).keys()].map((hour) => (
          <div key={hour} className={styles.WeekView_row}>
            <HourCell showTime hour={hour} />
            {[...Array(7).keys()].map((day) => (
              <HourCell
                key={day}
                showTime={false}
                event={eventsGrid[day][hour]}
                selectedCalendar={selectedCalendar}
              />
            ))}
          </div>
        ))}
        <div className={styles.WeekView_event} />
      </div>

    </div>
  );
};

WeekView.defaultProps = {
  selectedCalendar: null,
};

WeekView.propTypes = {
  events: PropTypes.arrayOf(eventShape).isRequired,
  selectedCalendar: calendarShape,
};

export default WeekView;
