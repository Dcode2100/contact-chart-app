import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactlist: [
    {
      id: 1, // Add an id property to each contact
      firstName: "John",
      lastName: "Doe",
      isActive: true,
    },
    {
      id: 2, // Add an id property to each contact
      firstName: "dikshant",
      lastName: "solanki",
      isActive: false,
    },
  ],
  idCounter: 3, // Initialize it based on the number of initial contacts
  isEditing: false,
  persist: true,
};


const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // increamenting the id and then storing for contact tracking
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
      }
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contactlist = state.contactlist.filter(
        (contact) => contact.id !== id
      );
    },
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { addContact, editContact, deleteContact, toggleEditing } =
  contactsSlice.actions;

export default contactsSlice.reducer;
