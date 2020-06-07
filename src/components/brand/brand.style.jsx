import styled from "styled-components";
import {typeScale} from "../../utils";

export const BrandWrapper = styled.div`
  position: absolute;
  right: 20px;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px){
  right: 40px;
  }
`;

export const BrandImage = styled.img`
  background-image: ${props => (props.src)};
  width: 6rem;
  margin-bottom: 8px;
`;
export const BrandText = styled.h5`
  margin: 0;
  line-height: 0.8;
  letter-spacing: ${props => props.flix ? "0.25rem" : "0rem"  };
  text-align: justify-all;
  font-size: ${typeScale.header5};
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-weight: 800;
`;