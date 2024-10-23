// src/App.js

import React, { useEffect, useState } from 'react';
import { getAuthUrl } from './Auth';
import { setToken, getCurrentUserProfile } from './SpotifyService';
import queryString from 'query-string';

function App() {
    const [token, setTokenState] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const hash = window.location.hash;
        if (!token && hash) {
            const parsed = queryString.parse(hash.substring(1));
            const _token = parsed.access_token;
            if (_token) {
                setTokenState(_token);
                setToken(_token);
            }
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            getCurrentUserProfile().then(setUser);
        }
    }, [token]);

    const login = () => {
        window.location.href = getAuthUrl();
    };

    return (
        <div className="App">
            <header className="App-header">
                {!token ? (
                    <button onClick={login}>Login with Spotify</button>
                ) : (
                    <div>
                        {user ? (
                            <>
                                <h2>Welcome, {user.display_name}</h2>
                                <img src={user.images[0].url} alt="Profile" />
                            </>
                        ) : (
                            <p>Loading user data...</p>
                        )}
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
