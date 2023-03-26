export const getContacts = state => state.contacts;

export const getFilteredContacts = state =>
  state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
