import {Container, Section, TotalBalance, TransactionTable, FormBar} from 'components'


export const HomePage = () => {
 
    return (
        <>
        <Section className='home-section'>
            <Container className='home-container'>
                       
                <TotalBalance/>

                <TransactionTable className="transaction-table"/>

                <FormBar/>
            </Container>
        </Section>
        </>
    );
};
