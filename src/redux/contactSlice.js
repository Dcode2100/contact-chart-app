import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactlist: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
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
  isEditing: null, // Track the contact being edited by its ID
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
        state.isEditing = null; // Reset the editing state
      }
    },

    deleteContact: (state, action) => {
      const id = action.payload;
      state.contactlist = state.contactlist.filter(
        (contact) => contact.id !== id
      );
      if (state.isEditing === id) {
        state.isEditing = null; // Reset the editing state if the deleted contact was being edited
      }
    },

    toggleEditing: (state, action) => {
      state.isEditing = action.payload; // Set the contact ID that is being edited
    },
  },
});

export const { addContact, editContact, deleteContact, toggleEditing } =
  contactsSlice.actions;

export default contactsSlice.reducer;
