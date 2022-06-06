import React from 'react';
import './components.css'

function InputFieldText(props) {
    return (
        <div className='InputDiv'>
            <p className='inputLabel'>{props.labeltext}</p>
            <div className="form-group">
                <input type={props.type}
                       name={props.name}
                       value={props.value}
                       onChange={props.onChange}
                       className="inputField"
                />
            </div>
        </div>
    )
}

export default InputFieldText
