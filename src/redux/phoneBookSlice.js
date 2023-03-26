import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const INITIAL_PHONEBOOK_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_PHONEBOOK_STATE,
  
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  // reducers: {
  //   addContact(state, { payload: newContact }) {
  //     state.contacts.push(newContact);
  //   },
  //   deleteContact(state, { payload: contactId }) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== contactId
  //     );
  //   },
  //   filterContacts(state, { payload: filterValue }) {
  //     state.filter = filterValue;
  //   },
  // },
});

export const { deleteContact, filterContacts } =
  phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;