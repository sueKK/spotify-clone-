// src/Auth.js

import queryString from 'query-string';

export const getAuthUrl = () => {
    const scopes = [
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'streaming',
        'user-read-email',
        'user-read-private',
    ];

    const authUrl = `https://accounts.spotify.com/authorize?${queryString.stringify({
        response_type: 'token',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        scope: scopes.join(' '),
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    })}`;
    return authUrl;
};
