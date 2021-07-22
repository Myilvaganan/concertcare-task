import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combinedReducer from './reducers/reducer';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
