import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    access_token : "",
    user: null,
  },
  reducers: {
    setToken: (state, action)=> {
        state.access_token = action.payload;
    },

    setUser: (state, action)=> {
        state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions

export default authSlice.reducer