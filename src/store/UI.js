import { createSlice } from "@reduxjs/toolkit";

const UISTORE = createSlice({
  name: "UISTORE",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    toggleSideBarHandeler(state) {
      state.showSideBar = !state.showSideBar;
    },

    setSideBarToTrue(state) {
      state.showSideBar = true;
    },
  },
});

export const uiStoreAction = UISTORE.actions;

export default UISTORE;
