import React, { useState, useRef } from 'react'
import Note from './note/Note'
import './MyNote.scss'

export default function MyNote() {
    const [changes, setChanges] = useState(false)
    const [userName, setUserName] = useState(sessionStorage.getItem('userName') ?? 'USERNAME')
    const [userEmail, setUserEmail] = useState(sessionStorage.getItem('userEmail') ?? 'USEREMAIL')
    const [avatar, setAvatar] = useState(sessionStorage.getItem('userAvatar') ?? 'AVATAR')
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const fileLoader = useRef(null)

    function submitChanges() {
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('userEmail', userEmail)
        sessionStorage.setItem('userAvatar', avatar)
        setChanges(false)
    }

    function uploadPhoto(e) {
        if (!e.target.files.length || e.target.files.length > 1 || !e.target.files[0].type.match('image')) return

        const reader = new FileReader();
        reader.onload = e => {
            setAvatar(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    function deleteUser() {
        const result = window.confirm('Вы уверенны, что хотите удалить аккаунт?');
        if (!result) return
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <div className="my-note-page">
            <div className="profile-container">
                <div className="user-info-wrapper">
                    <div className="user-avatar">
                        <div className="avatar-wrapper">
                            <img src={avatar} alt="Ваш аватар" className="avatar"/>
                            <input type="file" ref={fileLoader} onChange={uploadPhoto} accept=".png, .jpg, jpeg" className="file-loader"/>
                        </div>
                        {changes && <button onClick={() => fileLoader.current.click()} className='select-avatar'>Выбрать аватар...</button>}
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
            <hr className="line-separation" />
            <div className="note-container">
                <Note id={789879789879} />
            </div>
        </div>
    )
}