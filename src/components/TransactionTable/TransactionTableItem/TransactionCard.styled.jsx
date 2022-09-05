import styled from 'styled-components';

export const TransactionCardList = styled.ul`

`;
export const TransactionCardListItem = styled.li`
    padding: 12px 20px 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--transaction-underline-color);
    }

    &::after {
        content: '';
        width: 5px;
    height: 100%;
    background-color: var(--pink);
    position: absolute;
    left: 0;
    top: 0;
    }

    & .transaction__tittle {
        font-family: var(--baseFont);
        font-weight: var(--bold);
        font-size: 18px;
        line-height: 27px;
    }
    & .transaction__value {
        font-family: var(--baseFont);
        font-weight: var(--regular);
        font-size: 16px;
        line-height: 24px;
        &.sum {
            color: ${(props => props.type === "income" ? "var(--green)" : "var(--pink)")};
        }
    }
`;
