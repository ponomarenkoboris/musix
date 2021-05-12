import React from 'react'
import styles from './styles/UserWrapper.scss'

export const UserWrapper = () => {
    const name = localStorage.getItem('display_name')
    const uri = localStorage.getItem('user_uri')
    const avatarSrc = localStorage.getItem('user_avatar')

    return (
        <>
            <div className={styles.userContainer}>
                <a href={uri} className={styles.userInfoWrapper}>
                    <img className={styles.userAvatar} src={avatarSrc} alt={`${name} avatar`} />
                    <h1 className={styles.userName}>{name}</h1>
                </a>
            </div>
        </>
    )
}