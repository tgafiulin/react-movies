import React from 'react'

function Button (props) {
    const {className, onClick, type, value} = props;

    return (
        <button 
            className={className ? "btn " + className : "btn"} 
            onClick={onClick ? onClick : () => {}}
            type={type ? type : 'button'}
            >{value}</button>
    );


}

export default Button;