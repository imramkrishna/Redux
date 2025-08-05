import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/todo/userSlices";
const store = configureStore({
    reducer: userSlice.reducer
})
export default store;