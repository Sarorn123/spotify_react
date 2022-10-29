import React from 'react'

const Login = () => {

  const LoginWithSpotify = () => {
    const clientId = "65952bba79dd46cfa237505f4e395bb0";
    const redirectUri = "http://localhost:3000/";
    const scope = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-read-email",
      "user-read-private"
    ].join(" ");
    const spotify_url = "https://accounts.spotify.com/authorize";
    window.location.href = `${spotify_url}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
  }


  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <button className='bg-green-500 text-white px-4 py-2 rounded-full' onClick={LoginWithSpotify}>Login With Spotify</button>
    </div>
  )
}

export default Login