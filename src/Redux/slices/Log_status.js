import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const Log_Slice = createSlice({
    name: "status",
    initialState,
    reducers:{
        Login: (state,action)=>{
            state.status = true;
            state.data = action.payload.data
        },
        Logout: (state)=>{
            state.status = false;
            state.data = null;
        }
    }
})

export const {Login,Logout} = Log_Slice.actions
export default Log_Slice.reducer