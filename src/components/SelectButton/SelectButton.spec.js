import React from 'react';
import { shallow } from 'enzyme';
import SelectButton from '../../components/SelectButton';

describe('Select Button', () => {
  it('renders correctly', () => {
    const component = shallow(
      <SelectButton
        onClick={() => {}}
        isSelected={false}
        framework={{ name: 'Foo', slug: 'bar' }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
