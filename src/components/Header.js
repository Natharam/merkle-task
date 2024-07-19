import React from 'react';
import logo from '../assests/logo.png'
import name from '../assests/name-2.svg'
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ height, scrollY }) {
    const navigate = useNavigate()

    return (
        <header className={scrollY ? "header-outer active" : "header-outer"} style={{ height }}>
            <div className="header-logo">
                <img
                    src={logo}
                    alt='logo'
                    className='logo'
                    style={{
                        width: height - 10,
                        height: height - 30
                    }}
                />
                <img
                    src={name}
                    alt='name'
                    className='name'
                    style={{
                        width: (height - 30) * 5,
                        height: height - 30,
                        cursor: "pointer"
                    }}
                    onClick={() => navigate('/')}
                />
            </div>
            <nav className="header-navigation">
                <a href="/">About us</a>

                {height <= 82 && (
                    <button className='get-in-touch' onClick={() => navigate('/contact')}>Get in touch</button>
                )}

                <img src={logo} alt='logo' className='logo' style={{
                    width: height - 10,
                    height: height - 30
                }} />

                <img src='https://merkle3s-29cdsd9lg-gyanendraknojiyas-projects.vercel.app/images/nav.svg' alt='menu' className='menu' />
                {/* <div id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
            </nav>
        </header>
    );
}

export default Header;
