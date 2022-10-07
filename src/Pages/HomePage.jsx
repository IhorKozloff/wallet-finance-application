import {Container, Section, TotalBalance, TransactionTable, FormBar} from 'components'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { transactionsSortDateAscending, calculateBalance } from 'helpers';


export const HomePage = () => {
 
    const { data, isLoading  } = useSelector(state => state.allTransactionsStoreData);
    
    
    const [dataToRender, setDataToRender] = useState(null);
    const [totalValue, stTotalValue] = useState(0);


    useEffect(() => {
        if (data.length === 0 ) {
            return
        }

        const sortedData = transactionsSortDateAscending(data);

        const [total, balancedData] = calculateBalance(sortedData)
        


        setDataToRender(balancedData);
        stTotalValue(total);

    },[data])

    return (
        <>
        <Section className='home-section'>
            <Container className='home-container'>
                       
            <TotalBalance totalBalanceValue={totalValue}/>

                <TransactionTable dataToRender={dataToRender} className="transaction-table"/>

                <FormBar/>
            </Container>
        </Section>
        </>
    );
};
