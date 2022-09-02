import styled from 'styled-components';

export const BlueFormButtonStyled = styled.button`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   color: var(--active-blue);
   border: 1px solid var(--active-blue);
   border-radius: 20px;

   &:active {
    transform: scale(0.9);
   }
`;