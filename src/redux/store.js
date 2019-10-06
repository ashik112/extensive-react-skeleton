/* eslint-disable no-undef,no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'biznet',
  storage,
};

const appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

// add comma seperated middlewares [middleware1, middleware2,...]
const middlewares = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares), // other store enhancers if any
);

// Note: this API requires redux@>=3.1.0
export const store = createStore(
  persistedReducer, enhancer,
);

export const persistor = persistStore(store);
