import styled from "styled-components";
import {neutral, radicalRed, typeScale} from "../../utils";


export const CoverWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before{
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.53);
  }
`;
export const SampleButton = styled.div`
  position: absolute;
  color: ${props => props.theme.textColor};
  z-index: 2;
  top: 55px;
  left: calc(50% - 59px);
  display: inline-block;
  padding: 10px 25px;
  font-size: 80%;
  text-align: center;
  background: none;
  border: 1.5px solid white;
  border-radius: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 6px #fff;
  box-shadow:  0 0 6px #fff;
  font-weight: 800;
  cursor: pointer;
  @media only screen and (min-width: 600px){
  left: calc(50% - 74.914px);
  font-size: 120%;
  }
`;
export const CoverTextWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  left: 0;
  top: calc(50% - 150.5px);
  @media only screen and (min-width: 1024px){
  flex-direction: row;
  align-items: flex-end;
  left: calc(50% - 249px);
  }
`;
export const MainCoverText = styled.h1`
  font-size: 5rem;
  line-height: 5rem;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  color: ${radicalRed};
  @media only screen and (min-width: 600px){
    font-size: 10rem;
    line-height: 9rem;
  }

`;
export const WhoWeBeWrapper = styled.div`
  padding: 0 20%;
  color: ${props => props.theme.textColor};
  @media only screen and (min-width: 1024px){
    padding:0 40px 0 0;
  }
`;
export const WhoWeBeTitle = styled.h5`
 font-size: ${typeScale.header5};
 margin: 20px 0;
`;
export const WhoWeBeSubText = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.subTextColor};
`;
export const Arrows = styled.div`
  display: none;
  width: 70%;
  margin: 0 15%;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  top: calc(50% - 100px);
  @media only screen and (min-width: 600px){
    display: flex;
  }
`;

export const CarouselTrackerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  top: 20px;
  & *:last-child{
  margin: 0;
  }
`;
export const CarouselTracker = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid ${neutral[100]};
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
`;