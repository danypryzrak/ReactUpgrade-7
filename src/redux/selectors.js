import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
// export const selectFilteredContacts = state => state.phonebook.contacts.items.filter(item => {item.name.toLowerCase().includes(getFilter().toLowerCase())})

export const selectFilteredContacts = createSelector();
