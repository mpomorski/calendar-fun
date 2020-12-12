import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import GoogleAuth from '../GoogleAuth/GoogleAuthContainer';
import Calendar from '../Calendar/Calendar';

describe('App', () => {
  it('renders GoogleAuth component with a Calendar', () => {
    const wrapper = shallow(<App />);
    const googleAuth = wrapper.find(GoogleAuth);
    const calendar = wrapper.find(Calendar);

    expect(googleAuth).toHaveLength(1);
    expect(calendar).toHaveLength(1);
  });
});
