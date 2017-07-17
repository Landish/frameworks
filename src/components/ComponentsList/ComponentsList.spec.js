import React from 'react';
import { shallow } from 'enzyme';
import Collection from '../../core/Collection';
import data from '../../data';
import ComponentsList from '../../components/ComponentsList';

describe('Components List', () => {
  it('renders correctly', () => {
    const visible = new Collection(['bulma', 'ink']);
    const component = shallow(
      <ComponentsList
        components={data.components}
        frameworks={data.frameworks}
        visible={visible}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
