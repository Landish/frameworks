import React from 'react';
import { shallow } from 'enzyme';
import DemoButton from '../../components/DemoButton';

describe('DemoButton', () => {
  it('renders correctly', () => {
    const component = shallow(<DemoButton url="https://frameworks.now.sh" />);
    expect(component).toMatchSnapshot();
  });
});
