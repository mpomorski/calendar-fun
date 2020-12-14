import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';
import { calendarShape, eventShape } from '../../../propTypes';
import styles from './styles.module.scss';

const HourCell = ({
  showTime, hour, event, selectedCalendar,
}) => (
  <div className={cn(styles.HourCell, { [styles.HourCell___timeOnly]: showTime })}>
    {hour > 0 && (
    <span>
      {hour % 12 || 12}
      {' '}
      {hour / 12 >= 1 ? 'PM' : 'AM'}
    </span>
    )}
    {event
    && (
    <Event
      backgroundColor={selectedCalendar ? selectedCalendar.backgroundColor : '#5c6ae4'}
      color={selectedCalendar ? selectedCalendar.foregroundColor : 'white'}
      summary={event.summary}
      start={event.start}
      end={event.end}
    />
    )}
  </div>
);

HourCell.defaultProps = {
  hour: null,
  event: null,
  selectedCalendar: null,
};

HourCell.propTypes = {
  showTime: PropTypes.bool.isRequired,
  hour: PropTypes.number,
  event: eventShape,
  selectedCalendar: calendarShape,
};

export default HourCell;
