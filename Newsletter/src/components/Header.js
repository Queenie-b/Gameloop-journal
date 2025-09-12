import React from 'react';
import "./Header.css";

function Header() {
    return (
        <header className='header'>
            <div>
                <img src="/Logo.png" alt='Logo' id='logo'/>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;