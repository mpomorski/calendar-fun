import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import cn from 'classnames';

import styles from './styles.module.scss';
import { getCurrentDate } from '../../../../utils/dateUtils';

const DayHeader = ({ dayBeginning }) => {
  const isToday = dayBeginning && dayBeginning.getDay() === getCurrentDate().getDay();
  return (
    <div className={cn(styles.DayHeader, { [styles.DayHeader___empty]: !dayBeginning })}>
      {dayBeginning
      && (
        <>
          <span className={cn(styles.DayHeader_dayOfTheMonth,
            { [styles.DayHeader_dayOfTheMonth___highlighted]: isToday })}
          >
            {format(dayBeginning, 'd')}
          </span>
          <span className={cn(styles.DayHeader_dayOfTheWeek,
            { [styles.DayHeader_dayOfTheWeek___highlighted]: isToday })}
          >
            {format(dayBeginning, 'EEEE')}
          </span>
        </>
      )}

    </div>
  );
};

DayHeader.defaultProps = {
  dayBeginning: null,
};

DayHeader.propTypes = {
  dayBeginning: PropTypes.instanceOf(Date),
};

export default DayHeader;
