import { Formik } from "formik"
import {  WalletLogo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList } from "./AuthForm.styled"
import { PasswordSecureLableComponent } from "./PasswordSecureLable/PasswordSecureLable";
import { IconSVG } from "helpers/IconSvg";
import { useState } from "react";
import { PasswordTooltip } from "./PasswordTooltip/PasswordTooltip";

export const RegisterForm = ({onSubmitRegisterForm}) => {

    const [secureComponentData, setSecureComponentData] = useState(null)

    const initialValues = {
        email:'',
        password:'',
        passwordConfirm:'',
        firstName:''
    }

    const onSubmitForm = (values, actions) => {
        
        if (values.password === values.passwordConfirm) {
            onSubmitRegisterForm(values);
            actions.resetForm();
        } else {
            alert("Passwords do not match");
        }
        
    }

    const onPasswordInputChange = (event) => {
        console.log('Сработал кастомный обработчик события он ченж')
        console.log(event.target.value)
        console.log(event.target.value.length)
        setSecureComponentData(event.target.value)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} >
            
            {({handleChange}) => (
            <AuthFormWrapper className='register-form'>
                <WalletLogo/>
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="register-form__email" name="email" type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput
                            className="register-form__password"
                            name="password"
                            type="text" 
                            placeholder="Password"
                            onChange={(e) => {
                                handleChange(e);
                                onPasswordInputChange(e)
                            }}
                        />
                        <PasswordSecureLableComponent data={secureComponentData}/>
                        <PasswordTooltip/>
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
                <RedirectButton to='/login'>login</RedirectButton>

                        
            </AuthFormWrapper>
    )
            }
        </Formik>
    )
}