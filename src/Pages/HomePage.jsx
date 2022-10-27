import {Container, Section, TransactionTable, FormBar} from 'components'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/transactionsOperations";
import Media from 'react-media';

export const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { isLogin, user} = useSelector(state => state.userStatus);
      
    useEffect(() => {
  
      if(isLogin === true) {
  
        dispatch(fetchAllTransactions(user.token));
        navigate('/')
  
      } else {
        navigate('/login')
      }
    },[dispatch, isLogin, navigate, user.token])







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
