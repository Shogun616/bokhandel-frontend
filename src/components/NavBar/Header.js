import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <div className={"container"}>
            <a className={"navbar-brand"} href={"/start"}>
                {/*<img className={"navLogo"} src={"/VemasyLoggaSmall.png"} alt={"Vemasy logga"}/>*/}
                <span className={"navTitle"}>BOKHANDEL </span>
            </a>
            <ul className="nav justify-content-end">
                <Link to="/company">
                    <li className="nav-item">
                        <div className="nav-link menulink">FÖRETAG</div>
                    </li>
                </Link>
                <Link to="/consultant">
                    <li className="nav-item">
                        <div className="nav-link menulink">KONSULT</div>
                    </li>
                </Link>
                <Link to="/assignment">
                    <li className="nav-item">
                        <div className="nav-link menulink">UPPDRAG</div>
                    </li>
                </Link>
                <Link to="/timereport">
                    <li className="nav-item">
                        <div className="nav-link menulink">TIDSRAPPORT</div>
                    </li>
                </Link>
                <Link to="/invoice">
                    <li className="nav-item">
                        <div className="nav-link menulink">FAKTURA</div>
                    </li>
                </Link>
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
                        <Link to="/userprofile">
                            <div className="dropdown-item menulink-dropdown">
                                <i className="fas fa-users-cog"/> ANVÄNDARPROFIL
                            </div>
                        </Link>
                        <Link to="/companyProfile">
                            <div className="dropdown-item menulink-dropdown">
                                <i className="fas fa-address-card"/> MITT FÖRETAG
                            </div>
                        </Link>
                        <Link to="/document">
                            <div className="dropdown-item menulink-dropdown">
                                <i className="fas fa-database"/> DOKUMENT
                            </div>
                        </Link>
                        <Link to="/setting">
                            <div className="dropdown-item menulink-dropdown">
                                <i className="fas fa-cog"/> INSTÄLLNINGAR
                            </div>
                        </Link>
                        <div className="dropdown-divider"/>
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
