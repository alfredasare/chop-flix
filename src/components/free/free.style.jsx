import styled from "styled-components";
import {neutral, typeScale} from "../../utils";

export const FreeWrapper = styled.section`
  width: 100%;
  background-color: ${props => props.theme.secondaryWrapperColor};
  position: relative;
  padding: 5%;
   @media only screen and (min-width:1200px){
   padding: 10%;
  }
`;
export const FreeMachine = styled.img`
  height: 700px;
  position: absolute;
  z-index: 1;
  top: -120px;
  left: 45%;
  display: none;
  @media only screen and (min-width:1200px){
  display: inline-block;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.textColorInverted};
  @media only screen and (min-width:1200px){
  width: 50%;
  }
`;
export const HeaderOne = styled.h1`
 font-size: ${typeScale.header1};
 margin: 0;
 &:before{
 font-family: "Font Awesome 5 free", serif;
 content: '\f019';
 color: black;
 }
`;
export const HeaderTwo = styled.h3`
 font-size: ${typeScale.header3};
  margin: 0;
`;
export const FreeSubText = styled.p`
  font-size: ${typeScale.paragraph};
  word-spacing: 0.6rem;
  text-transform: none;
  color: ${neutral[400]};
  @media only screen and (min-width:1200px){
    max-width: 330px;
  }
`;
