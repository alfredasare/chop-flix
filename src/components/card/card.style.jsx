import styled from "styled-components";
import {neutral} from "../../utils";

export const CardWrapper = styled.div`
  height: auto;
  min-width: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${neutral[200]};
`;
export const CardImage = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 5px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const TextWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
export const SongTitle = styled.p`
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 800;
  color: ${props => props.theme.textColorInverted};
`;
export const LikeSection =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg{
  width: 25px;
  height: 25px;
  fill: none;
  cursor: pointer;
  }
  & svg > path:last-of-type{
  fill: black;
  }
  & svg:hover > path:first-of-type{
  fill: url(#MyGradient);
  }
`;
export const Genre = styled.p`
  text-transform: uppercase;
  text-align: left;
  font-size: 0.8rem;
  margin: 5px 0 40px 0;
  color: ${neutral[400]};
`;


