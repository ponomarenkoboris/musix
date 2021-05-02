import React from 'react'
import './styles/UserWrapper.scss'

export const UserWrapper = () => {
    const name = localStorage.getItem('display_name')
    const uri = localStorage.getItem('user_uri')
    const avatarSrc = localStorage.getItem('user_avatar')

    return (
        <>
            <div className="user-container">
                <a href={uri} className="user-info-wrapper">
                    <img className="user-avatar" src={avatarSrc} alt={`${name} avatar`} />
                    <h1 className="user-name">{name}</h1>
                </a>
            </div>
        </>
    )
}