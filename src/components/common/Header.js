import React from 'react'
import Search from './Search'
import AuthHeader from './AuthHeader'
import { Link } from "react-router-dom"; 

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__info">
                    <Link to="/">
                        <div className="logo">
                            <img src='/images/sign.svg' alt="Logo" className="logo__img" />
                            <div className="logo__name">Видеосервис</div>
                        </div>
                    </Link>
                    <Search />      
                    <AuthHeader />              
                </div>
            </div>
        </header>
    );
}

export default Header;