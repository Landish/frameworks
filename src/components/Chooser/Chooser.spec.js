import React from 'react';
import Chooser from '../../components/Chooser';
import Collection from '../../core/Collection';
import data from '../../data';
import { shallow } from 'enzyme';

describe('Chooser', () => {
  it('renders correctly', () => {
    const visible = new Collection(['bulma']);
    const component = shallow(
      <Chooser
        frameworks={data.frameworks}
        visible={visible}
        onFrameworkSelect={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
