import styled from 'styled-components';
import { GreenLargeButtonStyled, BlueFormButtonStyled } from 'components';
import { Form, Field } from "formik"

export const RegisterFormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 20px;

    & input {
        width: 100%;
    }

    @media screen and (min-width: 320px) {
        width: 280px;
    }

`;

export const FieldsList = styled.ul`
    margin-top: 60px;
    margin-bottom: 40px;

    & li {
        position: relative;
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 6px;
        padding-left: 55px;

        &:not(last-of-type) {
            margin-bottom: 40px;
        }
        & svg {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;


export const RegisterFormInput = styled(Field)`
    outline: none;
    border: none;
    margin: 0;
    padding: 0;

    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);

    font-size: 18px;
    line-height: 27px;

    color: var(--gray);
`;



export const RegisterButton = styled(GreenLargeButtonStyled)`
    margin-bottom: 20px;
`;
export const RedirectToLoginButton = styled(BlueFormButtonStyled)``;
