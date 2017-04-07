# crates-status

This is an *extremely* rough Glimmer app that is intended to get the ball rolling for a Crates.io status page.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd crates-status`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deployment

This app is currently deployed via [surge.sh](https://surge.sh). To deploy with surge, you will need to install the `surge` CLI with `npm install -g surge`.

You can then deploy using the following command `ember build -prod && surge dist/.`.

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)
