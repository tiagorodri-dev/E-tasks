import React from "react";
import ImgGoogle from "../../assets/logo-google.png";
import * as C from "./style";

const ButtonGoogle = ({ Text, onClick, Type = "button" }) => {
    return (
        <C.ButtonGoogle type={Type} onClick={onClick}>
            <C.ImgGoogle src={ImgGoogle} /> <span>{Text}</span>
        </C.ButtonGoogle>
    );
};

export default ButtonGoogle;