import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const component = shallow(<Navbar isMenuOpened={false} onNavToggle={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
