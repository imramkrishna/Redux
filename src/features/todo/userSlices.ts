import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    userId:"",
    userName:""
}
const userSlice=createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser:(state,action)=>{
            state.userId=nanoid();
            state.userName=action.payload;
            localStorage.setItem("userId", state.userId);
            localStorage.setItem("userName", state.userName);
        },
        removeUser:(state,action)=>{
            state.userId="",
            state.userName=""
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
        }
    }
})
export default userSlice;
export const { setUser, removeUser } = userSlice.actions;