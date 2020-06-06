import styled from "styled-components";
import CoverImage from "../../assets/images/cover2.jpg";
import {radicalRed, typeScale} from "../../utils";


export const CoverWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.primaryWrapper};
  background-image: url(${CoverImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before{
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.53);
  }
`;
export const SampleButton = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - 79px);
  display: inline-block;
  padding: 10px 25px;
  font-size: ${typeScale.header5};
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
  align-items: flex-end;
  z-index: 2;
  top: calc(50% - 144px);
  left: calc(50% - 249px);
`;
export const MainCoverText = styled.h1`
  font-size: 10rem;
  line-height: 9rem;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  color: ${radicalRed};
`;
export const WhoWeBeWrapper = styled.div`
`;
export const WhoWeBeTitle = styled.h5`
 font-size: ${typeScale.header5};
 margin: 20px 0;
`;
export const WhoWeBeSubText = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.subTextColor};
`;
