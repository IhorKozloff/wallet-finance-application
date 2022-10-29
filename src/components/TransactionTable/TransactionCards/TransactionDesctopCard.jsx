import { TransactionDesctopCardList, TransactionDesctopCardListItem } from './TransactionDesctopCard.styled';
import { sumConverter, addZeroInStart } from 'helpers';
import { TransactionRemoveBtn } from "./TransactionRemoveBtn/TransactionRemoveBtn";
import { useRemoveAndRefetch } from 'hooks/useRemoveAndRefetch';

export const TransactionDesctopCard = ({_id, date, comment, sum, category, type, balance}) => {


    const removeAndRefetch = useRemoveAndRefetch();

        const hendleRemoveButtonClick = async () => {

        removeAndRefetch(_id);
    }

    return (
        <TransactionDesctopCardList>
            <TransactionDesctopCardListItem className='transaction-card-list-item content' type={type} >
                <span className='transaction__value date'>{addZeroInStart(date.day)}.{addZeroInStart(date.month)}.{date.year}</span>
                <span className='transaction__value type'>{type === "income" ? "+" : "-"}</span>
                <span className='transaction__value category'>{category}</span>
                <span className='transaction__value comment'>{comment}</span>
                <span className='transaction__value sum'>{sumConverter(sum)}</span>
                <span className='transaction__value balance'>{sumConverter(balance)}</span>
                <div className='remove-btn-wrapper'>
                    <TransactionRemoveBtn removeAction={hendleRemoveButtonClick}/>
                </div>
                
            </TransactionDesctopCardListItem>
        </TransactionDesctopCardList>
    )
}
