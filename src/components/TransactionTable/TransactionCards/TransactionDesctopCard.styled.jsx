import styled from 'styled-components';

export const TransactionDesctopCardList = styled.ul`

`;



export const TransactionDesctopCardListItem = styled.li`
    padding: 12px 20px 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px solid var(--transaction-underline-color);

    // &:not(:last-of-type) {
    //     border-bottom: 1px solid var(--transaction-underline-color);
    // }

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
