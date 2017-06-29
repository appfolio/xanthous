import 'jsdom-global/register';

import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Steps } from '../../src';

describe('<Steps />', () => {
  it('should render correctly', () => {
    const steps = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const component = mount(<Steps steps={steps} />);
    assert(component);
  });

  it('should show correct number of steps');
  it('should activated the current step');
  it('should show complete correctly');
});
