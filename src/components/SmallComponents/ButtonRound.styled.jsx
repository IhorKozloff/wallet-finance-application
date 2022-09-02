import styled from 'styled-components';

export const StyledButtonRound= styled.button`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background-color: ${props => props.background};
    position: relative;
    box-shadow: ${props => props.shadow};
    & span {
        display: block;
        background-color: var(--white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
export const HorizontalIcon = styled.span`
    width: 20px;
    height: 1px;
`;
export const VerticalIcon = styled.span`
    width: 1px;
    height: 20px;
`;