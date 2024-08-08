import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts.items;

export const selectFilter = (state) => state.filter.filters.name;

export const selectLoading = (state) => state.contacts.contacts.loading;

export const selectError = (state) => state.contacts.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filteredContacts) => {
    const filteredData = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
    );
    return filteredData;
  }
);
