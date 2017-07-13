import React from 'react';
import Chooser from '../../components/Chooser';
import Collection from '../../core/Collection';
import data from '../../data';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const visible = new Collection(['bulma']);
  const tree = renderer
    .create(
      <Chooser
        frameworks={data.frameworks}
        visible={visible}
        onFrameworkSelect={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
