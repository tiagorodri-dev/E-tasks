import React from "react";
import "./style.css";

const Input = ({ type, placeholder, value, onChange, onKeyDown }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
