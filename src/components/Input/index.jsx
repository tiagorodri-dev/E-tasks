import React from "react";
import "./style.css";

const Input = ( {type, placeholder, value, onChange} ) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;