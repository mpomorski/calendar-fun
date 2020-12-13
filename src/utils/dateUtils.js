import { startOfWeek, endOfWeek } from 'date-fns';
import formatRFC3339 from 'date-fns/formatRFC3339';

export const getCurrentDate = () => new Date();

export const getStartOfWeek = (date) => startOfWeek(date);

export const getIsoStartOfWeek = (date) => formatRFC3339(getStartOfWeek(date));

export const getIsoEndOfWeek = (date) => formatRFC3339(endOfWeek(date));
