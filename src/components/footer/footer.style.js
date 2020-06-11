import styled from "styled-components";
import {neutral, typeScale} from "../../utils";

export const FooterWrapper = styled.section`
  width: 100%;
  padding: 10% 5%;
  background-color: ${props => props.theme.primaryWrapperColor};
  color: ${neutral[300]};
  @media only screen and (min-width: 900px){
    padding: 5% 10%;
  }
`;
export const Subscribe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media only screen and (min-width: 900px){
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const FooterText = styled.p`
  margin: 0 0 50px 0;
  text-align: ${props => props.joinText ? "left" : "center"};
  word-spacing: 0.6rem;
  width: 100%;
  font-size: ${typeScale.paragraph};
  line-height: 1.3;
  @media only screen and (min-width: 900px){
    margin: 0;
    text-align: left;
    width: ${props => props.terms ? "auto" : "25%"};
  }
`;
export const CopyWright = styled.p`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
    width: 100%;
    z-index: 2;
    & button{
    margin-top: 20px;
    width: 100%;
    font-size: ${typeScale.header5};
    }
  @media only screen and (min-width: 900px){
    width: 30%;
  }
`;
export const Email = styled.input`
  width: 100%;
  height: 50px;
  font-size: ${typeScale.header5};
  &:focus{
  outline: 2px ${props => props.theme.primaryColor} solid;
  }
`;