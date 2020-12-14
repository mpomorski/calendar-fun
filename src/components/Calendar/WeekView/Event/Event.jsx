import React from 'react';
import PropTypes from 'prop-types';
import { format, differenceInHours, getMinutes } from 'date-fns';
import styles from './styles.module.scss';

// TODO: refactor, improve
const Event = ({
  start, end, color, backgroundColor, summary,
}) => {
  // eslint-disable-next-line no-unused-vars
  const eventLength = differenceInHours(end, start);
  const eventDelay = getMinutes(start);
  const gridHeight = `${eventLength * 5}rem`;
  const eventMargin = `${(eventDelay / 60) * 5}rem`;
  return (
    <div
      className={styles.Event}
      style={{
        color,
        backgroundColor,
        manHeight: gridHeight,
        minHeight: gridHeight,
        marginTop: eventMargin,
      }}
    >
      <span className={styles.Event_summary}>{summary}</span>
      <span>
        {format(start, 'h:mm a')}
        {' '}
        -
        {' '}
        {format(end, 'h:mm a')}
      </span>
    </div>
  );
};
Event.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  summary: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Event;

// differenceInHours(dateLeft, dateRight)
