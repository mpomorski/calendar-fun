/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const CalendarListEntry = ({
  text, color, handleClick, selected,
}) => (
  <div
    className={cn(styles.CalendarListEntry, {
      [styles.CalendarListEntry___selected]: selected,
    })}
    onClick={handleClick}
  >
    <span
      className={styles.CalendarListEntry_dot}
      style={{
        backgroundColor: color,
      }}
    />
    <span>{text}</span>
  </div>
);

CalendarListEntry.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default CalendarListEntry;
