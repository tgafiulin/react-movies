import React from 'react'

function Input (props) {
    const {className, onChange, onKeyPress, onBlur, value, placeholder} = props;
    
    return (
        <input 
            className={className ? "input " + className : "input"} 
            onChange={onChange}
            onKeyPress={onKeyPress ? onKeyPress : () => {}}
            onBlur={onBlur ? onBlur : () => {}}
            value={value} 
            type="text" 
            placeholder={placeholder} />
    )
}

export default Input;