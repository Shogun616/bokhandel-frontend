import React from 'react';
import './components.css'

function DeleteButton(props) {
    return (
        <button
            type="button"
            className="btn thirdButton"
            onClick={props.onClick}
            disabled={props.isDisabled}
        >
            {props.text}
        </button>
    );
}
export default DeleteButton;
