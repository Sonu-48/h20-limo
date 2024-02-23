import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserAuthSlice";

 const store = configureStore({
  reducer: {
    userdata: userReducer,
  }
});
export default store;
