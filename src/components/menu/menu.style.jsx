import styled from "styled-components";


export const MenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  z-index: 2;
  display: inline-flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 40px);
`;
export const Icon = styled.i`
  color: ${props => props.theme.iconColor};
  font-size: 1.5rem;
  margin-bottom: ${props => (props.message ? "0" : "40px")};
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
`;