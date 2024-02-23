import { createSlice } from "@reduxjs/toolkit";

const UserAuthSlice = createSlice({
    name: 'userdata',
    initialState: {
    },
    reducers: {
        adduser(state, action) {
            return {...state, ...action.payload};
        }
    }
});

export const { adduser } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
