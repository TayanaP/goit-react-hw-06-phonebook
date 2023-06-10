//
export const getContacts = state => {
  const contacts = state.contacts.contactList;
  console.log('Contacts:', contacts);
  return contacts;
};
export const getFilter = state => state.filter;
