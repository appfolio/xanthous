# react-gears
react-gears is a React implementation of Appfolio UI components, using 
[React](https://reactstrap.github.io),
[Bootstrap 4](http://getbootstrap.com), 
and [reactstrap](https://reactstrap.github.io).

https://appfolio.github.io/react-gears

----
## Getting Started

    npm install @appfolio/react-gears
    
### Example

```
import React from 'react';
import { Button } from '@appfolio/react-gears';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};
```

## Development

**IMPORTANT:** Make sure your commits follow [conventional commits guidelines](https://www.conventionalcommits.org/en/v1.0.0/)!

Install dependencies:

    npm install

Run storybook examples:

    npm start
Open [http://localhost:6006](http://localhost:6006) in browser

Run tests & coverage report:

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/) and [enzyme](http://airbnb.io/enzyme/index.html)

If using [Cypress](https://www.cypress.io) for integration testing, you can use [react-gears-cypress](https://github.com/appfolio/react-gears-cypress) for testing react-gears components.

Run Linter

    npm run lint

- Runs [ESLint](http://eslint.org/) using [appfolio-react](https://github.com/appfolio/eslint-config-appfolio-react) as the base configuration

## Publishing

Release PRs are automatcally generated by [release-please](https://github.com/googleapis/release-please) when new commits are merged to `master`. When you're ready to publish, just merge the release PR (branch should look like `release-v${major}.${minor}.${patch}`), pull `master`, and run `npm publish`.

## Publishing pre-releases

Make sure to add a github auth token with package write permissions to your `~/.npmrc` file.

    //npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
    
To publish:

    npm version (premajor|preminor|prerelease)
    npm publish:prerelease
----

