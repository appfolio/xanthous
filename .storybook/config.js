import React from 'react';
import infoAddon, { setDefaults } from '@kadira/react-storybook-addon-info';
import { Button, ButtonGroup, Col, Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import pkg from '../package.json';

import './addons.js';

setOptions({
  name: `react-gears ${pkg.version}`,
  url: 'https://github.com/appfolio/react-gears',
  showDownPanel: true,
  downPanelInRight: true,
  downPanel: 'kadirahq%2Fstorybook-addon-knobs'
});

const ThemeLink = props => {
  const changeTheme = url => {
    const link = document.getElementById('theme');
    link.href = url;
  }

  return <Button color="link" onClick={() => changeTheme(props.url)}>{props.children}</Button>
}

const THEMES = [
  { name: 'Dev', url: 'bootstrap-saffron.css' },
  { name: 'Saffron', url: 'https://s3-us-west-2.amazonaws.com/appfolio-frontend-dev/styles/bootstrap-saffron.css' },
  { name: 'MyCase', url: 'https://s3-us-west-2.amazonaws.com/appfolio-frontend-dev/styles/bootstrap.mycase.min.css' },
  { name: 'Bootstrap', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' },
  { name: 'Material', url: 'https://bootswatch.com/4-alpha/materia/bootstrap.min.css' },
  { name: 'Metro', url: 'https://bootswatch.com/4-alpha/cosmo/bootstrap.min.css' },
  { name: 'Dark', url: 'https://bootswatch.com/4-alpha/darkly/bootstrap.min.css' }
];

addDecorator(withKnobs);

addDecorator((story, info) => (
<div>
  <ButtonGroup size="sm">
    {THEMES.map((theme, i) => <ThemeLink key={i} url={theme.url}>{theme.name}</ThemeLink>)}
  </ButtonGroup>
  <Container fluid className="m-5">
    <Col xl="7">
      <header className="mb-5">
        <h1 className="display-4 mb-3">{info.kind}</h1>
        <h2 className="lead">{info.story}</h2>
      </header>
      <section>
        {story()}
      </section>
    </Col>
  </Container>
</div>
));

setAddon(infoAddon);
setDefaults({
  header: false,
  inline: true
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
