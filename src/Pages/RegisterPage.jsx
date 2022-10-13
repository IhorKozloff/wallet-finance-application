import { AuthContainer, AuthSection, AuthTittleWrapper, RegisterForm } from 'components';
import Media from 'react-media';
import { userRegisterAPI } from "API/authAPI";
import { useDispatch } from 'react-redux';
import { fetchLogin } from "redux/authOperations";
import { useState } from 'react';
import { FullScreenLoader } from "components";

export const RegisterPage = () => {

const dispatch = useDispatch();
const [loaderStatus, setLoaderStatus] = useState(false)

const onSubmitRegisterForm = async (userRegisterData) => {


    const serverSendData = {
        name: userRegisterData.firstName,
        email: userRegisterData.email,
        password: userRegisterData.password
    }

    setLoaderStatus(true)

    const resStatus = await userRegisterAPI(serverSendData);
   

    if (resStatus) {
        dispatch(fetchLogin({email: serverSendData.email, password: serverSendData.password}))
    } else {
        setLoaderStatus(false);
    }

    

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
                {loaderStatus === true && <FullScreenLoader/>}
            </AuthContainer>
        </AuthSection>
    )
}