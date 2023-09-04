// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    // Add other reducers if you have them
  },
});

export default store;
