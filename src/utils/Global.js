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
  overflow-x: hidden;
  }
  .menu-disappear{
  position: absolute;
  height: 0;
  transform: translateY(100vh);
  opacity: 0;
  }
  @keyframes menu-loss {
  0%{
  height: 100%;
  transform: translateY(0);
  opacity: 1;
  }
  100%{
  height: 0;
  transform: translateY(100vh);
  opacity: 0;
  }
  }
  .rotate-icon{
  transform: rotate(-90deg);
  }
  .add-gradient{
    background: linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0) 100%);
  }
  .menu-icon-show{
  display: inline-flex !important;
  }
  .remove-label{
  & *:hover{
  &:after{
  content: none;
  }
  }
  }
`;