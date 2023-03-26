export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = state =>
  state.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
