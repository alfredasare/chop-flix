import styled from "styled-components";
import {neutral, typeScale} from "../../utils";


export const StashWrapper = styled.section`
  background-color: ${props => props.theme.secondaryWrapperColor};
   width: 100%;
   height: 680px;
   padding: 40px 0;
   position: relative;
   
`;
export const StashContentWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  overflow: hidden;
`;
export const StashHeader = styled.div`
  font-size: ${typeScale.header4};
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${props => props.theme.textColorInverted};
`;
export const StashHeaderWord = styled.h5`
  letter-spacing: 0.9rem;
  margin: ${props => props.dashed ? "0 5rem 0 0" : "0"};
  position: relative;
  &:after{
  content: ${props => props.dashed ? "''" : null};
  position: absolute;
  top: 140%;
  left: calc(50% - (5rem/2));
  display: inline-block;
  width: 5rem;
  height: 0.4rem;
  background-color: ${props => props.theme.textColorInverted};
  }
  @media only screen and (max-width: 1025px){
   letter-spacing: 0.2rem;
   margin: ${props => props.dashed ? "0 2rem 0 0" : "0"};

  }
`;
export const OverheadImage = styled.div`
  display: none;
  position: absolute;
  top: -50px;
  left: -350px;
  z-index: 1;
  & *{
  height: 710px;
  transform: rotate(15deg);
  }
  @media only screen and (min-width: 768px){
   display: inline-block;
  } 
`;
export const NewStashContainer = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 1025px){
  flex-direction: column;
  align-items: center;
  }
`;
export const NewStash = styled.h2`
  font-size: ${typeScale.header2};
  margin: 0;
  color: ${props => props.theme.textColorInverted};
  text-transform: capitalize;
  &:after{
  content: '';
  margin: 0 30px;
  display: inline-block;
  height: 3rem;
  width: 0.1rem;
  background-color: ${neutral[400]};  
  }
  @media only screen and (max-width: 1025px){
  font-size: ${typeScale.header3};
   &:after{
  content: none;
  }
  }

`;
export const DiscoverNewStash = styled.p`
  font-size: ${typeScale.paragraph};
  text-transform: uppercase;
  color: ${neutral[400]};
  @media only screen and (max-width: 1025px){
  font-size: ${typeScale.helperText};
  }
`;
export const StashArrows = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  & > *{
  width: 30px;
  height: 30px;
  &:first-child{
  margin-right: 10px;
  }
  }
`;