import React from "react";
import {Link} from "react-router-dom";

function ConfirmRegister() {
    return (
        <div className="window-container">
            <div className="create-container">
                <div className="frostedGlass">
                    <form className="create-form">
                        <h1>Registrering slutförd</h1>
                        <Link to={"/loggaIn"} className="btn secondary-Btn text-dark">Till Startsida</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmRegister
