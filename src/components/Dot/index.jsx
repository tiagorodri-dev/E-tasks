import React from "react";
import "./style.css";
import ImgDot from "../../assets/dots.png";

const Dot = () => {
    return (
        <div className="container-dot">
            <img src={ImgDot} className="img-dot" alt="Figura quadriculada do layout"/>
        </div>
    );
};

export default Dot;