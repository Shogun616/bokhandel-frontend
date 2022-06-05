import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

    const navigate = useNavigate();
    //const [isLoggedout, setIsLoggedout] = useState(false);



    const logout = () =>{

        localStorage.removeItem("username");
        localStorage.removeItem("jwt");
        localStorage.removeItem("jwt_refresh");


        // setIsLoggedout(true)
        // console.log(isLoggedout)
        navigate("/");

    }

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
                    <div
                    className="dropdown-menu menu-dropdown">

                    <div className="dropdown-item menulink-dropdown">

                        <button onClickCapture={logout} className="btn secondary-Btn text-dark"> LOGGA UT</button>

                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>
                    );
                    }

export default Header;
