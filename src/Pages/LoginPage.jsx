import { AuthContainer, AuthSection, AuthTittleWrapper, LoginForm } from 'components'
import Media from 'react-media';

export const LoginPage = () => {


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
                <LoginForm/>
            </AuthContainer>
        </AuthSection>
    )
}