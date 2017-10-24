import React from 'react';
import { shallow } from 'enzyme';
import NotAvailable from '../../components/NotAvailable';

describe('NotAvailable', () => {
  it('renders correctly', () => {
    const component = shallow(<NotAvailable />);
    expect(component).toMatchSnapshot();
  });
});
