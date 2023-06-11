//
export const getContacts = state => {
  const contacts = state.contacts.contactList;
  return contacts;
};
export const getFilter = state => state.filter;
