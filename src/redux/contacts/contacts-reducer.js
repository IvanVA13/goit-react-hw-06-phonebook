import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';
const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },

  [actions.delContact]: (state, { payload }) => {
    const filteredContacts = state.filter(contact => contact.id !== payload);
    return filteredContacts;
  },
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
