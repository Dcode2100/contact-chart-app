import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactlist: [
    {
      id: 1,
      firstName: "aslir",
      lastName: "asdf",
      isActive: true,
    },
    {
      id: 2,
      firstName: "dikshant",
      lastName: "solanki",
      isActive: false,
    },
  ],
  idCounter: 3,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        ...action.payload,
        id: state.idCounter,
      };
      state.contactlist.push(newContact);
      state.idCounter++;
    },

    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.contactlist.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contactlist[index] = updatedContact;
        state.isEditing = null;
      }
    },

    deleteContact: (state, action) => {
      const id = action.payload;
      state.contactlist = state.contactlist.filter(
        (contact) => contact.id !== id
      );
      if (state.isEditing === id) {
        state.isEditing = null;
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
