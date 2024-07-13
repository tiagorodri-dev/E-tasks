import React from "react";
import Img from "../../assets/list.png"
import "./style.css";

const Image = () => {
    return (
        <div className="image-controller">
            <img src={Img} alt="Imagem de fundo"/>
        </div>
    );
};

export default Image;