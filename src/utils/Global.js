import {createGlobalStyle} from "styled-components";
import {primaryFont} from "./typography";


export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body{
  font-family: ${primaryFont};
  margin: 0;
  padding: 0;
  }
`;