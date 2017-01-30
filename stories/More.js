import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Alert, Col, Row } from '../src';

storiesOf('and more...', module)
  .add('', () => (
    <section>
      <p>
        react-gears is mainly built around the open-source <code>reactstrap</code> library and <code>Bootstrap 4</code>.
      </p>
      <p>
        In addition to the components documented above, we export all reactstrap components as well:&nbsp;
        <a href="https://reactstrap.github.io/components">Reactstrap Components</a>
      </p>
      <p>
        In general, if weʼve documented a component in react-gears, it means it has been tested
        and/or adjusted to match an existing pattern in APM.
      </p>
      <p>
        You can also use utility classes directly from Bootstrap 4 in your UI:&nbsp;
        <ul>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/borders/">Borders</a></li>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/colors/">Colors</a></li>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/flexbox/">Flexbox alignment</a></li>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/screenreaders/">Screenreaders</a></li>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/sizing/">Sizing</a></li>
          <li><a href="https://v4-alpha.getbootstrap.com/utilities/spacing/">Spacing</a></li>
        </ul>
        <Alert icon color="danger">
          You should not use other Bootstrap component class names directly in your React UIs.
          You should instead import and use the equivalent React component from react-gears.
        </Alert>

      </p>
    </section>
  ));
