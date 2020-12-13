import { connect } from 'react-redux';
import {
  fetchCalendars, fetchThisWeeksEvents,
} from '../../actions/calendar';
import Calendar from './Calendar';

export const mapStateToProps = (state) => ({
  calendars: state.calendar.calendars,
  selectedCalendarId: state.calendar.selectedCalendarId,
  events: state.calendar.events,
});

const mapDispatchToProps = {
  fetchCalendars,
  fetchThisWeeksEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
