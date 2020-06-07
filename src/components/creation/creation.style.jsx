import styled from "styled-components";
import {typeScale} from "../../utils";

export const CreationWrapper = styled.section`
  padding: 50px 5%;
  background-color: ${props => props.theme.primaryWrapperColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;
  }
`;
export const VideoWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  box-shadow: -12px 10px 20px 0 rgba(0,0,0,0.55);

  &-4x3{
    padding-top: 75%;
  }
  @media only screen and (min-width: 768px){
    width: 50%;
    padding-top: 40.25%;
  }
`;
export const VideoPlayer = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const SessionContentWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px){
    width: 40%;
    margin: 0 5%;
    padding: 0 8%;
  }
`;
export const SessionHeader = styled.h1`
  font-size: 8vw;
  word-wrap: break-word;
  text-transform: uppercase;
  color: ${props => props.theme.primaryColor};
  line-height: 80%;
  margin: 30px 0 20px 0;
  @media only screen and (min-width: 600px){
    margin: 0 0 50px 0;
  }
`;
export const ProcessText = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.subTextColor};
  @media only screen and (min-width: 1200px) {
  line-height: 1.5;
  word-spacing: 0.6rem;
  }

`;