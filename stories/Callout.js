import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Callout } from '../src';
import { colors } from './colors';

storiesOf('Callout', module)
  .add('Live example', () => (
    <div>
      <Callout
        color={select('color', colors, Callout.defaultProps.color)}
        background={select('background', colors, Callout.defaultProps.background)}
        placement={select('placement', ['top', 'right', 'bottom', 'left'], Callout.defaultProps.placement)}
      >
        <h3>Hello World</h3>
        {text('content', `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.  Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.`)}
      </Callout>
    </div>
  ));
