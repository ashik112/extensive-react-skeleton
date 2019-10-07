# BIZNET V-2 (0.1.0)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn analyze`

Analyzes the bundle size after having a build.

### `yarn validate`
Runs multiple scripts with `npm-run-all`. Currently runs `yarn lint`.

### `yarn lint`
Fixes linting and finds lint error in `src` directory.


Analyzes the bundle size after having a build.


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**`Extreme Caution`: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Dependencies
Versions may change in the future and more libraries will be added.

#### Mandatory
1. "react": "^16.10.1"
2. "prop-types": "^15.7.2"
3. "react-scripts": "3.2.0"
4. "react-dom": "^16.10.1"
#### Webpack Customization `caution required`
1. "customize-cra": "^0.8.0"
2. "react-app-rewired": "^2.1.3"
3. "babel-plugin-import": "^1.12.2" `(dev)`
#### Git Hooks
1. "husky": "^3.0.8" `(dev)`
2. "npm-run-all": "^4.1.5" `(dev)`
#### Redux
1. "redux": "^4.0.4"
2. "react-redux": "^7.1.1"
3. "redux-persist": "^6.0.0"
4. "redux-thunk": "^2.3.0"
#### Routing
1. "react-router-dom": "^5.1.2"
2. "history": "^4.9.0"
#### Datetime
1. "moment": "2.24.0"
#### Bundle Size Analyzer
1. "source-map-explorer": "^2.1.0"
#### Http
1. "axios": "^0.19.0"
#### React Material Kit
1. "@material-ui/core": "4.3.2"
2. "@material-ui/icons": "4.2.1"
3. "classnames": "2.2.6"
4. "node-sass": "^4.12.0"
5. "nouislider": "14.0.2"
6. "react-datetime": "2.16.3"
7. "react-slick": "0.25.2"
8. "react-swipeable-views": "0.13.3"
#### Lint
1. "eslint": "^6.5.1" `(dev)`
2. "eslint-config-airbnb": "^18.0.1" `(dev)`
3. "eslint-plugin-import": "^2.18.2" `(dev)`
4. "eslint-plugin-jsx-a11y": "^6.2.3" `(dev)`
5. "eslint-plugin-react": "^7.15.1" `(dev)`
6. "eslint-plugin-react-hooks": "^1.7.0" `(dev)`
### Ant Design
1. "antd": "^3.23.6"
2. "less": "^3.10.3"
3. "less-loader": "^5.0.0"


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
