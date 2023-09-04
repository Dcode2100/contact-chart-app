import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidebarReducer from "./sidebarSlice";
import contactReducer from "./contactSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar", "contact"],
};

const persistedSidebarReducer = persistReducer(persistConfig, sidebarReducer);
const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    contacts: persistedContactReducer,
  },
});
const persistor = persistStore(store);

export { store, persistor };
