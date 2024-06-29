import React from "react";

import Logo from "../../assets/logo.png";
import "./style.css";

const Title = () => {
    return (
        <div className="container-title">
            <img src={Logo} className="logo" alt="Logo do E-tasks"/>
            <h1>E-tasks</h1>
        </div>
    );
};

export default Title;