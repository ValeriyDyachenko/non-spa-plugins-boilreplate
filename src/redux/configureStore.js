import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import selectRegionApp from './modules/selectRegionApp';

const reducer = combineReducers({
  selectRegionApp,
});

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name,
    // actionsBlacklist, actionsCreators, serialize...
  })
  : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const configureStore = (initialState) => createStore(
    reducer,
    initialState,
    enhancer,
);

export default configureStore;
