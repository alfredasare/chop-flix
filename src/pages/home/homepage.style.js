import styled from "styled-components";
import {brinkPink} from "../../utils";


export const MenuIconWrapper = styled.div`
  display: inline-flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3000;
  top: calc(100vh - 55px);
  left: 10px;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 2px solid ${brinkPink};
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  &:hover{
  opacity: 1;
  }
`;
export const IconCircles = styled.div`
  background-color: ${brinkPink};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;