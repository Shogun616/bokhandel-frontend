import React from "react";
import './Home.css';

function Home(){
    return(
        <div>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"} >
                <a className={"navbar-brand"} href={"/"}>
                    <span className={"navTitle"}>BOKHANDEL </span>
                </a>
                <div id={"navbarTooglerDemo03"} className={"navbar-collapse sticky-top collapse"}>
                    <ul className={"navbar-nav ml-auto"}>
                        <li className={"nav-item active"}/>
                    </ul>
                </div>
            </nav>
            <div className={"body-content"}>
                <header className={"masthead text-center text-dark"}>
                    <div className={"masthead-content"}>
                        <div>
                            <h1 className={"masthead-heading"}>. . .</h1>
                            <h1 className={"masthead-heading"}>
                                <span className={"ShayaBlue-Text"}>.</span>
                            </h1>
                        </div>
                        <div className={"textBoxHeading"}>
                            <p className={"textHeading"}>
                                .
                            </p>
                            <center>
                                <a className={"btn primary-Btn"} href={"/loggaIn"}>LOGGA IN</a>
                            </center>
                        </div>
                    </div>
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
                        © 2022 Projektarbete Komplex Java.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home
