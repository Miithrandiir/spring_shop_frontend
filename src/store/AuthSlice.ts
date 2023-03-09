import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
    },
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    }
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;
