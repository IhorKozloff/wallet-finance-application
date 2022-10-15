import {Container, Section, DiagramTab} from 'components'
import { fetchCategories } from "redux/transactionsOperations";


import { useSelector, useDispatch } from 'react-redux';

export const StatisticPage = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.userStatus.user);

    dispatch(fetchCategories(token));
    
    return (
        <Section className='statistic-section'>
            <Container className='container statistic-container'>
                <p>Statistic Page</p>
                <DiagramTab/>
            </Container>
        </Section>
    )
}