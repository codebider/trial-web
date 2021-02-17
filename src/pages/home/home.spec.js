import React from 'react';
import renderer from 'react-test-renderer';

import Home from './home';

describe('Home', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
