import React from 'react';
import renderer from 'react-test-renderer';
import Collection from '../../core/Collection';
import data from '../../data';
import ComponentsList from '../../components/ComponentsList';

it('renders correctly', () => {
  const visible = new Collection(['bulma', 'ink']);
  const tree = renderer
    .create(
      <ComponentsList
        components={data.components}
        frameworks={data.frameworks}
        visible={visible}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
