import styled from "styled-components";


export const ArrowCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
  border: 2px solid ${props => props.theme.primaryColor};
  }
`;
export const ArrowForward = styled.div`
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *{
  width: 75%;
  }
`;
export const ArrowReverse = styled(ArrowForward)`
  transform: rotateY(180deg);
`;