import { Container, Section, RegisterForm } from 'components'


export const RegisterPage = () => {


    return (
        <Section className='register-section'>
            <Container className='container register-page-container'>
                
                <RegisterForm/>
            </Container>
        </Section>
    )
}