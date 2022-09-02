import styled from 'styled-components';
import { Container } from 'components';
import incomeWallpaper from '../../img/income-add-image.png';
import expenseWallpaper from '../../img/expense-image.png';
import { Field } from 'formik';


export const TransactionAddFormWrapper = styled.div`
    position: absolute;
    top: 62px;
    left: 0;
    width: 100%;
`;
export const TransactionAddFormContainer = styled(Container)`
    background-color: var(--white);
    height: 100vh;
    padding-top: 20px;
`;
export const FormTittle = styled.p`
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 20px;
`;
export const CustomRadioButton = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    cursor: pointer;
    color: var(--gray);
`;
export const ModalTextInput = styled(Field)`
    margin: 40px 0;
    padding: 0 0 0 20px;
    width: 280px;
    -webkit-appearance: none;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid var(--gray);
    
`; 

export const FormButtonsList = styled.ul`
    & li {
        &:not(:last-of-type) {
            margin-bottom: 20px;
        }
    }
`;
export const FormChangerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CustomRadioButtonWrapper = styled.div`

    &.income-checkbox label  {
        color: ${props => props.formsStatus === "income" ? "var(--green)" : "var(--gray)"};
    };

    &.expense-checkbox label {
        color: ${props => props.formsStatus === "expense" ? "var(--pink)" : "var(--gray)"};
    }

`;
export const RangeSwitcherBtn = styled.input.attrs({type: 'range'})`
    -webkit-appearance: none;
    outline: none;
    width: 80px;
    height: 40px;
    border: 1px solid var(--gray);
    border-radius: 30px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("${props => props.formsStatus === 'expense' ? expenseWallpaper : incomeWallpaper}");

    }
`;
