# EXTENSIVE REACT SKELETON
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

#### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### `yarn analyze`
Analyzes the bundle size after having a build.

#### `yarn validate`
Runs multiple scripts with `npm-run-all`. Currently runs `yarn lint`.

#### `yarn lint`
Fixes linting and finds lint error in `src` directory.

Analyzes the bundle size after having a build.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

>`Extreme Caution`

`Note`: this is a one-way operation. Once you `eject`, you can’t go back!**

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
#### Webpack Customization `(caution required)`
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
#### Lint
1. "eslint": "^6.5.1" `(dev)`
2. "eslint-config-airbnb": "^18.0.1" `(dev)`
3. "eslint-plugin-import": "^2.18.2" `(dev)`
4. "eslint-plugin-jsx-a11y": "^6.2.3" `(dev)`
5. "eslint-plugin-react": "^7.15.1" `(dev)`
6. "eslint-plugin-react-hooks": "^1.7.0" `(dev)`
### [Ant Design](https://ant.design/docs/react/introduce)
1. "antd": "^3.23.6"
2. "less": "^3.10.3"
3. "less-loader": "^5.0.0"

# Folder Structure
```
├── src
│   ├── containers -----------------------------------> Company, Employee etc.
│   │   ├── {Title}
│   │   │   ├── apiServices --------------------------> all api related code goes here
│   │   │   ├── redux --------------------------------> redux related codes are here for a particular module
│   │   │   │   ├──  actions.js
│   │   │   │   ├──  actionTypes.js
│   │   │   │   ├──  reducer.js ----------------------> must be exported and imported in `src/redux/reducers/index.js` to be included in `combineReducers`
│   │   │   ├── routes
│   │   │   │   │   ├── index.js ---------------------> history & menu for the bundle routing goes here
│   │   │   ├── pages -----> Application Pages; DashboardPage, LoginPage etc.
│   │   │   │   ├──  **/*.jsx
│   │   │   ├── components ---------------------------> components for it's container
│   │   │   │   ├──  **/*.jsx ------------------------> LoginForm, MonthlySalesChart etc.
│   │   ├── ...
│   │   ├── Layouts
│   │   │   │   ├── HeaderBar, Sidebar
│   │   │   │   ├── LayoutWrapper.jsx ----------------> Sidebar.jsx + HeaderBar.jsx
│   ├── assets ---------------------------------------> Images, CSS & Other assets.
│   ├── constants
│   │   ├── config.js.temp ---------------------------> base api url. must be copied/renamed to `config.js`
│   │   ├── history.js -------------------------------> createBrowserHistory for react-router
│   │   ├── index.js ---------------------------------> Application Name
│   ├── redux ----------------------------------------> common redux related codes for whole application
│   │   ├── actions
│   │   ├── actionTypes
│   │   ├── reducers
│   │   ├── store.js
│   ├── routes -----------------------------------> page routing
│   │   ├── apiRoutes ----------------------------> all api routes
│   │   ├── AuthenticatedRouting.jsx -------------> when user logged in and authorized
│   │   ├── UnauthenticatedRouting.jsx -----------> when user not logged in or unauthorized
│   │   ├── menuRoutes ---------------------------> routes for sidebar rendering and routing
│   │   ├── historyRoutes ------------------------> to change pages
│   ├── services ---------------------------------> reusable services goes here to use throughout the application
│   │   ├── apiService ---------------------------> axios middleware and actions
│   │   ├── checkHttpError -----------------------> check http errors and handle
│   │   ├── storageService -----------------------> localStorage actions
│   │   ├── **/*.js
│   ├── shared -----------------------------------> shared components and services to use throughout the application
│   ├── styles -----------------------------------> less, css, sass
│   │   ├── formLayout.js ------------------------> ant form layout
│   │   ├── less ---------------------------------> ant form layout
│   │   ├── less
│   │   │   ├── theme.less -----------------------> ant design style override
│   │   │   ├── **/*.less
│   ├── Root.js ----------------------------------> Starts Here
│   ├── index.js
│   ├── index.css
│   └── serviceWorker.js
├── build (or dist) ------------------------------> `yarn build`
├── public
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
├── node_modules
├── test
├── jsconfig.json -------------------------------> specify base url as `src`, needed for `components`
├── .babelrc.js ---------------------------------> Babel plugin import.
├── .eslintrc.json ------------------------------> linting config and rules. `(eslint)`
├── .config-overrides.js ------------------------> Custom webpack config. with `custom-cra`
├── README.md
├── package.json --------------------------------> packages
├── yarn.lock
├── README.md
└── .gitignore
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `yarn build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
