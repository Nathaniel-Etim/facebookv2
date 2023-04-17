import { configureStore } from "@reduxjs/toolkit";
import ALLUSERPOST from "./postStore";
import UISTORE from "./UI.js";

const store = configureStore({
  reducer: {
    AllPost: ALLUSERPOST.reducer, // add a reducer named 'AllPost' with the corresponding reducer function imported from './postStore'
    Ui: UISTORE.reducer, // add a reducer named 'Ui' with the corresponding reducer function imported from './UI'
  },
});

export default store;
