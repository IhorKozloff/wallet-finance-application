import {Container, Section, TotalBalance, TransactionTable, FormBar} from 'components'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/transactionsOperations";


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
