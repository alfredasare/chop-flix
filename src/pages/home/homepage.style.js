import styled from "styled-components";
import {brinkPink} from "../../utils";


export const MenuIconWrapper = styled.div`
  display: inline-flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3000;
  top: calc(100vh - 60px);
  left: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${brinkPink};
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  &:hover{
  opacity: 1;
  }
  @media only screen and (min-width: 600px){
    left: 40px;
  }
`;
export const IconCircles = styled.div`
  background-color: ${brinkPink};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;