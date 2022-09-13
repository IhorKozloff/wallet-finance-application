import { Formik } from "formik"

import {  WalletLogo } from 'components';
import { RegisterButton, RedirectToLoginButton, RegisterFormWrapper, RegisterFormInput, FieldsList } from "./RegisterForm.styled"
import { IconSVG } from "helpers/IconSvg";
export const RegisterForm = () => {

    const initialValues = {
        email:'',
        password:'',
        passwordConfirm:'',
        firstName:''
    }

    const onSubmitForm = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
            
            <RegisterFormWrapper className='register-form'>
                <WalletLogo/>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <RegisterFormInput className="register-form__email" name="email" type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <RegisterFormInput className="register-form__password" name="password" type="text" placeholder="Password"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <RegisterFormInput className="register-form__password-confirm" name="passwordConfirm" type="text" placeholder="Confirm password"/>
                    </li>
                    <li>
                        <IconSVG id="form-name-icon"/>
                        <RegisterFormInput className="register-form__frist-name" name="firstName" type="text" placeholder="First name"/>
                    </li>
                </FieldsList>
                


                <RegisterButton type='submit' className="register-form__register-button">register</RegisterButton>
                <RedirectToLoginButton type='button'>login</RedirectToLoginButton>

                        
            </RegisterFormWrapper>
        </Formik>
    )
}