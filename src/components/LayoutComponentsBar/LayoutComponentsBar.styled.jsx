import styled from "styled-components";


export const LayoutComponentsWrapper = styled.div`
    padding: 12px 0 32px 0;
    
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        display: flex;
    }
`;
export const NavigationAndBalanceWrapper = styled.div`
    margin-right: 32px;
    border: 1px solid black;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 336px;
    }
`;