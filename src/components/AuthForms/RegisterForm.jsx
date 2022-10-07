import { Formik } from "formik"

import {  WalletLogo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList } from "./AuthForm.styled"
import { IconSVG } from "helpers/IconSvg";
export const RegisterForm = ({onSubmitRegisterForm}) => {

    const initialValues = {
        email:'',
        password:'',
        passwordConfirm:'',
        firstName:''
    }

    const onSubmitForm = (values, actions) => {
        onSubmitRegisterForm(values)
        actions.resetForm()
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
            
            <AuthFormWrapper className='register-form'>
                <WalletLogo/>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="register-form__email" name="email" type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="register-form__password" name="password" type="text" placeholder="Password"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="register-form__password-confirm" name="passwordConfirm" type="text" placeholder="Confirm password"/>
                    </li>
                    <li>
                        <IconSVG id="form-name-icon"/>
                        <AuthFormInput className="register-form__frist-name" name="firstName" type="text" placeholder="First name"/>
                    </li>
                </FieldsList>
                


                <AuthButton type='submit' className="register-form__register-button">register</AuthButton>
                <RedirectButton to='login'>login</RedirectButton>

                        
            </AuthFormWrapper>
        </Formik>
    )
}