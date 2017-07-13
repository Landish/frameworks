import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';

it('renders correctly', () => {
  const tree = renderer
    .create(<Header isMenuOpened={false} onNavToggle={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
