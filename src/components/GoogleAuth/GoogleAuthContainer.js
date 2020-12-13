import { connect } from 'react-redux';
import {
  signInPending, signInFailure, signInSuccess, signOutSuccess,
} from '../../actions/auth';
import GoogleAuth from './GoogleAuth';

export const mapStateToProps = (state) => ({
  pending: state.auth.pending,
  authenticated: state.auth.authenticated,
  error: state.auth.error,
});

const mapDispatchToProps = {
  signInPending,
  signInSuccess,
  signInFailure,
  signOutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
