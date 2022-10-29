import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slice/authSlice";
import spotifyReducer from "./slice/spotifySlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    spotify: spotifyReducer,
  },
})