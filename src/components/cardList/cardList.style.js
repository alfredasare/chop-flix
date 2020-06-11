import styled from "styled-components";

export const CardListWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  transition: all 0.4s ease-in-out;
  scroll-behavior: smooth;
 
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
  & {
  -ms-overflow-style: none;
}
  text-align: center;
  padding: 10px;
   & *{
   margin-right: 10px;
   }
   & > :last-of-type{
   margin-right: 0;
   }
   @media only screen and (min-width: 1200px) {
   justify-content: center;
   }

   //@media only screen and (max-width: 1025px){
   //& > :nth-child(3):nth-last-child(n + 2) ~ *{
   //display: none;
   //} 
   //}
`;