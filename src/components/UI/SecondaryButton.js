import React from 'react';
import './components.css';

function SecondaryButton(props) {
  return (
      <button
          type="button"
          className="btn button-outline secondaryButton"
          onClick={props.onClick}
          disabled={props.isDisabled}
      >
        {props.text}
      </button>
  );
}

export default SecondaryButton;
