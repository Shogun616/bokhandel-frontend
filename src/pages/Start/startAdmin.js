import React from 'react';
import Header from "../../components/NavBar/Header";


function StartAdmin() {
    return (
        <div>
            <Header />
            <div>
                <div className={"body-content"}>
                    <header className={"masthead text-center text-dark"}>
                        <div className={"masthead-content"}>
                            <center>
                                <h2>Lägg till din första bok</h2>
                                <a className={"btn primary-Btn"} href={"/laggTillBok"}>SKAPA+</a>
                            </center>
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
            </div>
            <footer className={"py-5"}>
                <div>
                    <p className={"m-0 text-center text-white small"}>
                        © 2022 Projektarbete Komplex Java.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default StartAdmin
