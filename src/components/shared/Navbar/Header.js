import React from 'react';
import {Navbar} from 'react-bootstrap';
import LogoGolfam from '../../../assets/img/logo-golfam.png';
import LogoClub from '../../../assets/img/cnsi-logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand >
                <img
                    alt="Logo Golfam"
                    src={LogoGolfam}
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Golfam Admin <span className="admin-version">v1.0</span>
            </Navbar.Brand>
            <div className="club-logo-container">
                <img src={LogoClub}  alt="Club Logo" width="50" height="50"/>
            </div>
        </Navbar>
    )
}

export default Header;