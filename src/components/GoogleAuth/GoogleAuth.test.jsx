import React from 'react';
import { shallow } from 'enzyme';
import GoogleAuth from './GoogleAuth';

describe('GoogleAuth', () => {
  const defaultProps = {
    pending: false,
    authenticated: false,
    error: false,
    signInPending: () => {},
    signInFailure: () => {},
    signInSuccess: () => {},
    signOutSuccess: () => {},

  };
  let gapiLoadMock;

  beforeEach(() => {
    gapiLoadMock = jest.fn(() => {});

    window.gapi = {
      load: gapiLoadMock,
    };
  });

  afterAll(() => {
    delete window.gapi;
  });

  describe('when mounted', () => {
    it('dispatches signInPending action', () => {
      const signInPendingMock = jest.fn(() => {});
      const props = { ...defaultProps, signInPending: signInPendingMock };
      expect(signInPendingMock).not.toHaveBeenCalled();
      shallow(<GoogleAuth {...props} />);
      expect(signInPendingMock).toHaveBeenCalled();
    });

    it('loads auth2 gapi client', () => {
      expect(gapiLoadMock).not.toHaveBeenCalled();
      shallow(<GoogleAuth {...defaultProps} />);
      expect(gapiLoadMock).toHaveBeenCalledWith('client:auth2', expect.anything());
    });
  });

  it('renders Auth pending text when pending', () => {
    const props = { ...defaultProps, pending: true };
    const wrapper = shallow(<GoogleAuth {...props} />);
    const header = wrapper.find('h3');

    expect(header.text()).toContain('Auth pending...');
  });

  it('renders error text when error', () => {
    const props = { ...defaultProps, error: true };
    const wrapper = shallow(<GoogleAuth {...props} />);
    const header = wrapper.find('h3');

    expect(header.text()).toContain('Auth error occurred, please check your config. '
      + 'Please note, that you can not be using incognito mode.');
  });

  it('renders sign in button when not authenticated', () => {
    const props = { ...defaultProps, authenticated: false };
    const wrapper = shallow(<GoogleAuth {...props} />);
    const button = wrapper.find('button');

    expect(button.text()).toContain('sign in');
    expect(button.props().onClick).toEqual(wrapper.instance().handleSignIn);
  });

  it('renders children when authenticated', () => {
    const props = { ...defaultProps, authenticated: true };
    const DummyChild = () => 'naming gone wrong';
    const wrapper = shallow(<GoogleAuth {...props}><DummyChild /></GoogleAuth>);

    expect(wrapper.find(DummyChild)).toHaveLength(1);
  });

  describe('onAuthChange', () => {
    it('dispatches singInSuccess action when called with true value', () => {
      const signInSuccessMock = jest.fn(() => {});
      const props = { ...defaultProps, signInSuccess: signInSuccessMock };
      const wrapper = shallow(<GoogleAuth {...props} />);

      expect(signInSuccessMock).not.toHaveBeenCalled();
      wrapper.instance().onAuthChange(true);
      expect(signInSuccessMock).toHaveBeenCalled();
    });

    it('dispatches signOutSuccess action when called with false value', () => {
      const signOutSuccessMock = jest.fn(() => {});
      const props = { ...defaultProps, signOutSuccess: signOutSuccessMock };
      const wrapper = shallow(<GoogleAuth {...props} />);

      expect(signOutSuccessMock).not.toHaveBeenCalled();
      wrapper.instance().onAuthChange(false);
      expect(signOutSuccessMock).toHaveBeenCalled();
    });
  });

  describe('handleSignIn', () => {
    it('dispatches signIn action when called', () => {
      const signInPendingMock = jest.fn(() => {});
      const props = { ...defaultProps, signInPending: signInPendingMock };
      const wrapper = shallow(<GoogleAuth {...props} />);
      signInPendingMock.mockClear();
      expect(signInPendingMock).not.toHaveBeenCalled();
      wrapper.instance().auth = { signIn: () => {} };
      wrapper.instance().handleSignIn();
      expect(signInPendingMock).toHaveBeenCalled();
    });
  });
});
