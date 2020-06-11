import styled from "styled-components";
import {brinkPink, typeScale} from "../../utils";


export const MenuWrapper = styled.div`
  padding: 10px 20px;
  position: absolute;
  bottom: 20px;
  z-index: 2000;
  display: inline-flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 40px);
  transition: all 0.5s ease-out;
`;
export const Icon = styled.i`
  color: ${props => props.theme.iconColor};
  font-size: 1.5rem;
  position: relative;
  margin-bottom: ${props => (props.message ? "0" : "40px")};
  cursor: pointer;
  & * {
  width: 2rem;
  transition: transform 0.4s ease-out;
  }
  &:hover > *{
  transform: ${props => {
    if (props.home) {
        return "scale(1.5)";
    } else if (props.audio) {
        return "scaleX(1.5)"
    } else if (props.basket) {
        return "rotateZ(30deg)"
    } else if (props.message) {
        return "skewY(10deg)"
    }
}
};
  }
  &:hover{
    &:after{
  ${props => {
    if (props.home) {
        return ("content : 'home'");
    } else if (props.audio) {
        return ("content : 'audio'");
    } else if (props.basket) {
        return ("content : 'cart'");
    } else if (props.message) {
        return ("content : 'contact'");
    }
}
};
  font-size: ${typeScale.paragraph};
  display: inline;
  position: absolute;
  top: 15%;
  font-style: normal;
  margin-left: 20px;
  background-color: rgba(0,0,0,0.78);
  padding: 2px 5px;
  animation: move-right 0.4s ease-in both;
  }
  }
  @keyframes move-right{
  from{transform: translateX(-10px)}
  to{transform: translateX(2px)}
  }
`;
export const VerticalLine = styled.div`
  height: calc(100% - 433px);
  width: 2px;
  margin: 20px 0;
  background-color: ${props => props.theme.iconColor};;
`;
export const SocialIconWrapper = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.iconColor};
  color: ${props => props.theme.textColorInverted};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
  background-color: ${brinkPink};
  color: ${props => props.theme.textColor};
  }
`;