import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 100%;
  display: flex;
  &:after{
  }
`;
export const ImageContainer = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 100vw;
`;

