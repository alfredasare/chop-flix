import styled from "styled-components";
import {neutral, typeScale} from "../../utils";


export const StashWrapper = styled.section`
  background-color: ${props => props.theme.secondaryWrapperColor};
   width: 100%;
   height: 630px;
   padding: 40px;
   position: relative;
   
`;
export const StashContentWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: calc(100%);
`;
export const StashHeader = styled.div`
  font-size: ${typeScale.header4};
  display: flex;
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
`;
export const OverheadImage = styled.div`
  position: absolute;
  top: -50px;
  left: -350px;
  z-index: 1;
  & *{
  width: 65%;
  transform: rotate(15deg);
  } 
`;
export const NewStashContainer = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: flex-end;
`;
export const NewStash = styled.h2`
  font-size: ${typeScale.header2};
  margin: 0;
  color: ${props => props.theme.textColorInverted};
  text-transform: uppercase;
  &:after{
  content: '';
  margin: 0 30px;
  display: inline-block;
  height: 3rem;
  width: 0.1rem;
  background-color: ${neutral[400]};  
  }
`;
export const DiscoverNewStash = styled.p`
  font-size: ${typeScale.paragraph};
  text-transform: uppercase;
  color: ${neutral[400]};
`;