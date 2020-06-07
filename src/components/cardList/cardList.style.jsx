import styled from "styled-components";

export const CardListWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  text-align: center;
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