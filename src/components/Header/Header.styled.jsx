import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const LogoWrapper = styled.ul`
    display: flex;
    align-items: center;
    
    & li:first-of-type {
        margin-right: 16px;
    }
`;
export const LogoutBtn = styled.button`
    height: 18px;

    & svg {
        fill: var(--gray);
    }

    &:hover {
    
        svg {fill: var(--black)};
    }
`;
export const UserName = styled.span`
    color: var(--gray);
    margin-right: 8px;
`;
export const AuthNavigate = styled.div`
    display: flex;
    align-items: center;
`;