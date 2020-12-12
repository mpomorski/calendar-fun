import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

describe('Calendar', () => {
  it('renders Calendar view text', () => {
    const wrapper = shallow(<Calendar />);
    const header = wrapper.find('h3');
    expect(header.text()).toContain('Calendar View');
  });
});
