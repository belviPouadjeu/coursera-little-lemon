import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import hamburgerMenu from '../assets/images/icon _hamburger.svg';
import homeIcon from '../assets/images/home_icon.svg'; 
import './Nav.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='nav-container'>
            <nav>
                <img
                    src={logo}
                    alt="logo"
                    className='logo-image'
                />
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <img src={hamburgerMenu} alt="Menu" />
                </div>
                <ul className={menuOpen ? "menu-open" : ""}>
                    <li>
                        <NavLink
                            to="/" onClick={closeMenu}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            <img src={homeIcon} alt="home" className='home-icon' />
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
                    <li><NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Menu</NavLink></li>
                    <li><NavLink to="/reservation" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Reservation</NavLink></li>
                    <li><NavLink to="/orderOnline" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Order online</NavLink></li>
                    <li><NavLink to="/login" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
