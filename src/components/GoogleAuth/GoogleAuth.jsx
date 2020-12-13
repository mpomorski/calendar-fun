import React from 'react';
import PropTypes from 'prop-types';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

class GoogleAuth extends React.Component {
  componentDidMount() {
    const { signInPending, signInFailure } = this.props;
    signInPending();
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      }, () => {
        signInFailure();
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signInSuccess, signOutSuccess } = this.props;
    if (isSignedIn) {
      signInSuccess();
    } else {
      signOutSuccess();
    }
  };

  handleSignIn = () => {
    const { signInPending } = this.props;
    signInPending();
    this.auth.signIn();
  };

  render() {
    const {
      pending,
      error,
      authenticated,
      children,
    } = this.props;
    if (pending) {
      // TODO: replace with a nice spinner
      return <p>Auth pending...</p>;
    }

    if (error) {
      // TODO: apply styling
      return (
        <p>
          Auth error occurred, please check your config.
          Please note, that you can not be using incognito mode.
        </p>
      );
    }

    if (!authenticated) {
      // TODO: apply styling
      return (
        <>
          <p>
            Please
            {' '}
            <button type="button" onClick={this.handleSignIn}>sign in</button>
            {' '}
            with a Google Account in order to use the app.
          </p>

        </>
      );
    }

    return children;
  }
}

GoogleAuth.defaultProps = {
  children: null,
};

GoogleAuth.propTypes = {
  pending: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  signInPending: PropTypes.func.isRequired,
  signInFailure: PropTypes.func.isRequired,
  signInSuccess: PropTypes.func.isRequired,
  signOutSuccess: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default GoogleAuth;
