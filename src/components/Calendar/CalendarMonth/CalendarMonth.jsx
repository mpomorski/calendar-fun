import React from 'react';
import { format } from 'date-fns';

import styles from './styles.module.scss';

const CalendarMonth = () => (
  <div className={styles.CalendarMonth}>
    {format(
      new Date(),
      'MMMM, yyyy',
    )}
  </div>
);

export default CalendarMonth;
