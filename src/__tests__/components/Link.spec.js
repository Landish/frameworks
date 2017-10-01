import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../components/Link';

describe('Link', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Link url="https://frameworks.now.sh/" text="Comparison of Front-End Frameworks" />
    );
    expect(component).toMatchSnapshot();
  });
});
