import React from "react";
import './Home.css';

function Home(){
    return(
        <div>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"} >
                <a className={"navbar-brand"} href={"/"}>

                </a>
                <div id={"navbarTooglerDemo03"} className={"navbar-collapse sticky-top collapse"}>
                    <ul className={"navbar-nav ml-auto"}>
                        <li className={"nav-item active"}/>
                    </ul>
                    <form className={"form-inline my-2 my-lg-0"}>
                        <a className={"btn btn-outline-success my-2 my-sm-0 login-Btn"} href={"/login"}>LOGGA IN</a>
                    </form>
                </div>
            </nav>
            <div className={"body-content"}>
                <header className={"masthead text-center text-dark"}>
                    <div className={"bg-circle-3 bg-circle"}/>
                    <div className={"moon-container"}>
                        <div className={"moon"}>
                            <div className={"bg-circle-2 bg-circle bg-circle-animation"}/>
                            <div className={"bg-circle-4 bg-circle bg-circle-animation"}/>
                            <div className={"bg-circle-0 bg-circle bg-circle-animation"}/>
                        </div>
                    </div>
                </header>
            </div>
            <footer className={"py-5"}>
                <div>
                    <p className={"m-0 text-center text-white small"}>
                        © 2022 .
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home
