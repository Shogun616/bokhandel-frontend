import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {

    const navigate = useNavigate();

    const logout = () =>{
        //localStorage.removeItem("username");
        localStorage.removeItem("jwt");
        localStorage.removeItem("jwt_refresh");
        //localStorage.removeItem("shoppingCartId");
        //localStorage.remove("cartItemId")
        navigate("/");
    }

    return (
        <div className={"container"}>
            <a className={"navbar-brand"} href={"/start"}>
                <span className={"navTitle"}>BOKHANDEL </span>
            </a>
            <form className={"form-inline my-2 my-lg-0"}>
                <a onClick={() => logout()}
                   className={"btn btn-outline-success my-2 my-sm-0 login-Btn text-light"}
                >LOGGA UT</a>
            </form>
        </div>
    );
}

export default Header;
