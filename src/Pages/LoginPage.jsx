import { AuthContainer, AuthSection, AuthTittleWrapper, LoginForm } from 'components'
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin } from "redux/authOperations";
import { FullScreenLoader } from "components";

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.userStatus);

    const onSubmitLoginForm = async (data) => {
        dispatch(fetchLogin(data))
    }


    return (
        <AuthSection className='login-section'>
            <AuthContainer className='container login-page-container'>
                <Media query="(min-width: 768px)" render={() =>
                    (
                        <AuthTittleWrapper>
                            <h2>Finance App</h2>
                        </AuthTittleWrapper>
                    )}
                />
                <LoginForm onSubmitLoginForm={onSubmitLoginForm}/>
                {isLoading === true && <FullScreenLoader/>}
            </AuthContainer>
        </AuthSection>
    )
}