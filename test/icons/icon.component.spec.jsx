/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Icon } from '../../src/index';


describe('Icon component', function describe() {
  it('should render correctly', () => {
    // This will only test the test stub defined in test.setup.js
    // Testing the real Icon component hasn't succeeded yet.
    const wrapper = mount(
      <Icon type="indicator" name="more" />,
    );
    expect(wrapper.props()).to.eql({
      height: 40,
      type: 'indicator',
      name: 'more',
      width: 40,
    });
  });
});
