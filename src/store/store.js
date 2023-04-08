import { configureStore } from "@reduxjs/toolkit";
import ALLUSERPOST from "./postStore";
import UISTORE from "./UI.js";

const store = configureStore({
  reducer: {
    AllPost: ALLUSERPOST.reducer,
    Ui: UISTORE.reducer,
  },
});

export default store;
