import { createSlice } from "@reduxjs/toolkit";

const UISTORE = createSlice({
  name: "UISTORE",
  initialState: {
    showSideBar: false,
    hideContactSection: null,
    hideChatSection: null,
  },
  reducers: {
    toggleSideBarHandeler(state) {
      state.showSideBar = !state.showSideBar;
    },

    setSideBarToTrue(state) {
      state.showSideBar = true;
    },

    sethideContactSection(state, action) {
      state.hideContactSection = action.payload;
    },

    setHideChatSection(state, action) {
      state.hideChatSection = action.payload;
    },
  },
});

export const uiStoreAction = UISTORE.actions;

export default UISTORE;
