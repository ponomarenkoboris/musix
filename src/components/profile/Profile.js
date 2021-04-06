import React, { useState, useRef } from 'react'
import './Profile.scss'
// import { uploadAvatar } from "./uploadAvatar";

export default function Profile() {
    const [changes, setChanges] = useState(false)
    const [userName, setUserName] = useState(!sessionStorage.getItem('userName') ? 'USERNAME' : sessionStorage.getItem('userName'))
    const [userEmail, setUserEmail] = useState(!sessionStorage.getItem('userEmail') ? 'USEREMAIL' : sessionStorage.getItem('userEmail'))
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const fileLoader = useRef(null)

    function submitChanges() {
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('userEmail', userEmail)
        setChanges(false)
    }

    function choosePhoto() {
        fileLoader.current.click()
    }

    function deleteUser() {
        const result = window.confirm('Вы уверенны, что хотите удалить аккаунт?');
        console.log('result', result)
    }

    return (
        <>
            <div className="profile-container">
                <div className="user-info-wrapper">
                    <div className="user-avatar">
                        {/*<h1>AVATAR</h1>*/}
                        <input type="file" ref={fileLoader} accept=".png, .jpg, jpeg" className="file-loader"/>
                        {changes && <button onClick={choosePhoto} className='select avatar'>Выбрать аватар...</button>}
                    </div>
                    <div className="user-info-settings">
                        <div className="user-info">
                            <div className="user-name-wrapper">
                                <p className="user-name"><strong>Имя пользователя: </strong>
                                    {!changes ? userName : <input ref={nameRef} type="text" value={userName} onChange={() => setUserName(nameRef.current.value)}/>}
                                </p>
                            </div>
                            <div className="user-email-wrapper">
                                <p className="user-email"><strong>Email: </strong>
                                    {!changes ? userName : <input ref={emailRef} type="text" value={userEmail} onChange={() => setUserEmail(emailRef.current.value)}/>}
                                </p>
                            </div>
                        </div>
                        <div className="profile-settings">
                            {!changes ? <p className="change-user-data" onClick={() => setChanges(true)}>Изменить</p> :
                                <p className="submit-changes" onClick={submitChanges}>Сохранить изменения</p>}
                            <p className="delete-user-data" onClick={deleteUser}>Удалить</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}