import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <div className={"container"}>
            <a className={"navbar-brand"} href={"/start"}>
                {/*<img className={"navLogo"} src={"/"} alt={"Bokhandel logga"}/>*/}
                <span className={"navTitle"}>BOKHANDEL </span>
            </a>
            <ul className="nav justify-content-end">
                <li className="nav-item dropdown">
                    <div
                        className="nav-link menu-dropdown-link"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-user-circle"/>
                    </div>
                    <div className="dropdown-menu menu-dropdown">
                        <Link to="/">
                            <div className="dropdown-item menulink-dropdown">
                                <i className="fas fa-sign-out-alt"/> LOGGA UT
                            </div>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Header;
