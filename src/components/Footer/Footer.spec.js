import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
