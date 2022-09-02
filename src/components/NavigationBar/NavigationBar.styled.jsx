import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBarWrapper = styled.div`

`; 
export const NavigationList = styled.ul`
    display: flex;
    justify-content: center;
`;
export const NavigationItem = styled.li`
    &:not(:last-of-type) {
        margin-right: 32px;
    }
`;
export const NavigationButton = styled.button`

    svg {
        fill: var(--blue);
    }

    &:hover {
        svg {
            fill: var(--active-blue);
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        }
    }
`;

export const StyledLink = styled(Link)`

`;