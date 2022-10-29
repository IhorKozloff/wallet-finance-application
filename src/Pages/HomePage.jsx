import {Container, Section, TransactionTable, FormBar} from 'components'

import Media from 'react-media';


import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/transactionsOperations";
export const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, user} = useSelector(state => state.userStatus);
  const { transactions } = useSelector(state => state.allTransactionsStoreData)
    
  useEffect(() => {
    console.log('useEffect in Home activated')

    if (transactions.length !== 0) {
      console.log('сработал ретерн если транзакции не пустые')
      return
    }
    
    if(isLogin === true) {
      console.log('useEffect in Home fetch')
      dispatch(fetchAllTransactions(user.token));
      navigate('/')

    } else {
      navigate('/login')
      console.log('useEffect in Home redirect to login page')
    }
  },[dispatch, isLogin, navigate, transactions, user.token])







    return (
        <>
         <Media query="(min-width: 1280px)" render={() =>
            (
              <>
                <TransactionTable className="transaction-table"/> 
                <FormBar/>
              </>
            )}
          />
          <Media query="(max-width: 1279px)" render={() =>
            (
              <Section className='home-section'>
                <Container className='home-container'>
                        <TransactionTable className="transaction-table"/>
                        <FormBar/>
                </Container>
              </Section>
            )}
          />

            
        </>
    );
};
