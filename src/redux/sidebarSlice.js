import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: window.innerWidth >= 768,
  
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar, updateIsActive } =
  sidebarSlice.actions;
export const selectSidebar = (state) => state.sidebar.isOpen;
export const selectIsActive = (state) => state.sidebar.isactive;
export default sidebarSlice.reducer;
