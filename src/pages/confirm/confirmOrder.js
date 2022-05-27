import {Link} from "react-router-dom";
import React from "react";

function ConfirmOrder() {
    return (
        <div className="window-container">
            <div className="create-container">
                <div className="frostedGlass">
                    <form className="create-form">
                        <h1>Beställningen är nu genomförd.</h1>
                        <Link to={"/start"} className="btn secondary-Btn text-dark">Till Startsida</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrder
