import React from 'react'
import { requestAuthorization } from '../utils/spotify'
import './styles/Auth.scss'

export default function AuthArea() {
    return (
        <div className="authentication-container">
            <button onClick={requestAuthorization} className="login-sptif">
                Login in Spotify
            </button>
        </div>
    )
}