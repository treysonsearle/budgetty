import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import userReducer from './userReducer.js';


const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
  })

  export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
