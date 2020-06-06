import styled from "styled-components";
import {typeScale} from "../../utils";

export const ModalWrapper = styled.div`
  width: 90%;
  height: 500px;
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.formElementText};
  box-shadow: 0 5px 16px rgba(0,0,0,0.40);
  @media only screen and (min-width: 600px){
  width: 70%;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 35%;
  padding: 20px;
  color: ${props => props.theme.formHeaderWrapperText};
  font-size: ${typeScale.header5};
  background-color: ${props => props.theme.formHeaderWrapper};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
`;