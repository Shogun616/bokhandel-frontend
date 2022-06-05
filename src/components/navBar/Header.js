import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("username");
        localStorage.removeItem("jwt");
        localStorage.removeItem("jwt_refresh");
        navigate("/");
    }

    return (
        <div className={"container"}>
            <a className={"navbar-brand"} href={"/start"}>
                <span className={"navTitle"}>BOKHANDEL </span>
            </a>
            <form className={"form-inline my-2 my-lg-0"}>
                <a onClick={() => logout()}
                   className={"btn btn-outline-success my-2 my-sm-0 login-Btn"}
                   href={"/login/admin"}>LOGGA UT</a>
            </form>
        </div>
    );
}

export default Header;
