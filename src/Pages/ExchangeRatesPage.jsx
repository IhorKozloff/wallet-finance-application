import {ExchangeRates, Section, Container } from 'components'

export const ExchangeRatesPage = () => {
 
    return (
        <>
        <Section className='exchange-rates-section'>
            <Container className='exchange-rates-container'>

                <ExchangeRates/>

            </Container>
        </Section>
        </>
    );
};
