import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders header with a dummy text', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('h3');

    expect(header.text()).toContain('WIP...');
  });
});
