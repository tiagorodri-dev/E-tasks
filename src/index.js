import React from 'react'
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

const root = createRoot(document.querySelector("#root"));

root.render(
    <GoogleOAuthProvider clientId="1045705534802-uuon8h62demkssndkai8q7da2toivrm0.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
);