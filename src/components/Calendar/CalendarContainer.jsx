import { connect } from 'react-redux';
import {
  fetchCalendars,
} from '../../actions/calendar';
import Calendar from './Calendar';

export const mapStateToProps = (state) => ({
  calendars: state.calendar.calendars,
});

const mapDispatchToProps = {
  fetchCalendars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
