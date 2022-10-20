import {Container, Section, DiagramTab} from 'components'
import { fetchCategories } from "redux/transactionsOperations";


import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const StatisticPage = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.userStatus.user);

   
    useEffect(() => {
        dispatch(fetchCategories({token}));
    },[dispatch, token]);

    return (
        <Section className='statistic-section'>
            <Container className='container statistic-container'>
                <h2>Statistic Page</h2>
            <DiagramTab/>
            </Container>
        </Section>
    )
}