import React from 'react';
import logo from '../../assets/logo.svg'
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Task Logo" />
                <span>To Do Task</span>
            </div>
            <div className="themeSelector">
                <span className="light"></span>
            </div>
        </header>
    );
};

export default Header;