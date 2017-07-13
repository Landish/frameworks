import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../components/Icon';

it('renders correctly', () => {
  const tree = renderer.create(<Icon name="github" />).toJSON();
  expect(tree).toMatchSnapshot();
});
