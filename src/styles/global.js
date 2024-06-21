import { createGlobalStyle } from 'styled-components';
import img from "../assets/list.jpg";

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.9);
        font-family: Arial, Helvetica, sans-serif;
        background-image: url(${img});
        background-size: cover;
        background-position: center;
    }
`;

export default GlobalStyle;