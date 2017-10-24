import React from 'react';
import { shallow } from 'enzyme';
import Collection from '../../core/Collection';
import data from '../../data';
import FrameworksList from '../../components/FrameworksList';

describe('Frameworks List', () => {
  it('should pass snapshot correctly', () => {
    const visible = new Collection(['bulma', 'ink']);
    const component = shallow(<FrameworksList frameworks={data.frameworks} visible={visible} />);
    expect(component).toMatchSnapshot();
  });
});
