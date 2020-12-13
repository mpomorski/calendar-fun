import { startOfWeek, endOfWeek } from 'date-fns';
import formatRFC3339 from 'date-fns/formatRFC3339';

export const getCurrentDate = () => new Date();

export const getIsoStartOfWeek = (date) => formatRFC3339(startOfWeek(date));

export const getIsoEndOfWeek = (date) => formatRFC3339(endOfWeek(date));
