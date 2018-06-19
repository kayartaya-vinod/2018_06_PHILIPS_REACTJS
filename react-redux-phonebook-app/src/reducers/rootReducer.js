import { combineReducers, applyMiddleware } from 'redux';
import { contacts } from './contacts';

// typically an application may have more than one reducers to manage
// states of different kind: customers, orders, products etc
// Combine all of them together for creating a single store
export default combineReducers({
    contacts
});

