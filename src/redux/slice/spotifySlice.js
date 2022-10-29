import { createSlice } from '@reduxjs/toolkit'

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    playlists : null,
    songs: null,
    playingSong: null,
    isPlaying: false,
  },
  reducers: {
    setPlaylist: (state, action)=> {
        state.playlists = action.payload;
    },
    setSongs: (state, action)=> {
      state.songs = action.payload;
    },
    setPlayingSong: (state, action)=> {
      state.playingSong = action.payload;
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    }

  },
});

export const { setPlaylist, setSongs , setPlayingSong, setIsPlaying} = spotifySlice.actions

export default spotifySlice.reducer