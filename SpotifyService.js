// src/SpotifyService.js

import axios from 'axios';

export const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getCurrentUserProfile = async () => {
    const response = await axios.get('https://api.spotify.com/v1/me');
    return response.data;
};
