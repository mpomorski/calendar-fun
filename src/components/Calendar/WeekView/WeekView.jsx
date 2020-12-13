import React from 'react';
import { add } from 'date-fns';
import { getCurrentDate, getStartOfWeek } from '../../../utils/dateUtils';

import styles from './styles.module.scss';
import DayHeader from './DayHeader/DayHeader';

const WeekView = () => {
  const weekStart = getStartOfWeek(getCurrentDate());
  return (
    <div className={styles.WeekView}>
      <div className={styles.WeekView_header}>
        <DayHeader />
        {[...Array(7).keys()].map((i) => (
          <DayHeader key={i} dayBeginning={add(weekStart, { days: i })} />
        ))}
      </div>
    </div>
  );
};

export default WeekView;
