import { combineReducers } from "@reduxjs/toolkit";

import modalReducer from "./modal/modal-slice";

export const reducer = combineReducers({
  modal: modalReducer,
});
