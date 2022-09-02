import styled from 'styled-components';

export const TransactionTableList = styled.ul`
   
`;
export const TransactionTableItem = styled.li`
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
    
    &:not(:last-of-type) {
        margin-bottom: 8px;
    }
`;