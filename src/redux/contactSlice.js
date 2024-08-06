import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
