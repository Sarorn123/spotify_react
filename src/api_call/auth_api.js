import axios from "axios";

const base_url = "	https://api.spotify.com/v1";


export const getCurrentUser = async (access_token) => {

    const headers = {
        "Authorization": "Bearer " + access_token,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const response = await axios.get(base_url+"/me", {
        headers
    });
    return response.data;
}