import { AuthContainer, AuthSection, AuthTittleWrapper, RegisterForm } from 'components';
import Media from 'react-media';

import { passwordСomparison } from "helpers";
import { userRegisterAPI } from "API/authAPI";

export const RegisterPage = () => {


const onSubmitRegisterForm = async (userRegisterData) => {

    if (passwordСomparison(userRegisterData.password, userRegisterData.passwordConfirm) === false) {
        return alert('Password is not confirmed');
    };

    const serverSendData = {
        name: userRegisterData.firstName,
        email: userRegisterData.email,
        password: userRegisterData.password
    }

    await userRegisterAPI(serverSendData);
}
    

    return (
        <AuthSection className='register-section'>
            <AuthContainer className='container register-page-container'>

                <Media query="(min-width: 768px)" render={() =>
                    (
                        <AuthTittleWrapper>
                            <h2>Finance App</h2>
                        </AuthTittleWrapper>
                    )}
                />
                
                <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm}/>
                
            </AuthContainer>
        </AuthSection>
    )
}