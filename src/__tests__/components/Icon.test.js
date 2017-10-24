import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../../components/Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const component = shallow(<Icon name="github" />);
    expect(component).toMatchSnapshot();
  });
});
