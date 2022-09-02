import styled from 'styled-components';

export const GreenLargeButtonStyled = styled.button`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   color: var(--white);
   background-color: var(--green);
   border-radius: 20px;

   &:active {
    transform: scale(0.9);
   }
`;