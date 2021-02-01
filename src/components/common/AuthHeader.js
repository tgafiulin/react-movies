import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../app/modalReducer'
import { editLogin } from '../../app/loginReducer'
import Input from './Input'
import Button from './Button'

function AuthHeader () {
    let login = useSelector(state => state.login.login)
    const [loginText, editLoginText] = useState(login)
    const dispatch = useDispatch();
    const [edit, updateEdit] = useState(false)

    useEffect(() => {
        editLoginText(login)
    }, [login]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(editLogin(''))
        updateEdit(false)
    } 

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(openModal())
    }

    const handleEditLogin = () => {
        updateEdit(true)
    }

    const handleBlur = () => {
        dispatch(editLogin(loginText))
        updateEdit(false)
    }

    let loginJsx

    if (!edit) {
        loginJsx = <div className="auth-header__login" onClick={handleEditLogin}>{login}</div>
    } else {
        loginJsx = <Input value={loginText} onChange={(e) => editLoginText(e.target.value)} onBlur={handleBlur} className="input input--login" placeholder="Введите новый логин" />
    }
    return (
        <div className="auth-header">
            { loginJsx }
            { login.length ?  <Button className="btn--close" onClick={handleLogout} value="Выйти" /> : <Button onClick={handleLogin} value="Войти" /> }
        </div>
    )
}

export default AuthHeader;