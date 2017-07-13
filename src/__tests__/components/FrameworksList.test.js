import React from 'react';
import renderer from 'react-test-renderer';
import Collection from '../../core/Collection';
import data from '../../data';
import FrameworksList from '../../components/FrameworksList';

it('should pass snapshot correctly', () => {
  const visible = new Collection(['bulma', 'ink']);
  const tree = renderer
    .create(<FrameworksList frameworks={data.frameworks} visible={visible} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
