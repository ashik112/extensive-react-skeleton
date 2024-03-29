import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'assets/mdbreact/scss/mdb.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'antd/dist/antd.less';
import { store, persistor } from './redux/store';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
