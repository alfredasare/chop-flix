import styled from "styled-components";
import CoverImage from "../../assets/images/cover2.jpg";
import {radicalRed, typeScale} from "../../utils";


export const CoverWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background-color: ${props => props.theme.primaryWrapperColor};
  background-image: url(${CoverImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.53);
  }
  @media only screen and (min-width: 600px){
  padding: 20px 40px;
  }
`;
export const SampleButton = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - 74.914px);
  display: inline-block;
  padding: 10px 25px;
  font-size: 120%;
  text-align: center;
  background: none;
  border: 1.5px solid white;
  border-radius: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 6px #fff;
  box-shadow:  0 0 6px #fff;
  font-weight: 800;
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
