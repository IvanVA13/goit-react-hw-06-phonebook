import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
  'contacts/add-contact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: shortid.generate(),
      },
    };
  },
);
export const delContact = createAction('contacts/del-contact');
export const filterContact = createAction('contacts/filter-contact');
