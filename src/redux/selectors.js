export const getContacts = state => state.phonebook.contacts;

export const getFilteredContacts = state =>
  state.phonebook.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
  );
