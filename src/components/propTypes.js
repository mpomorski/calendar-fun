import PropTypes from 'prop-types';

export const calendarShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  foregroundColor: PropTypes.string.isRequired,
  primary: PropTypes.bool,
});

export const eventShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
});
