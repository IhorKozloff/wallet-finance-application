import { TransactionDesctopCardList, TransactionDesctopCardListItem } from './TransactionDesctopCard.styled';

export const TransactionDesctopCard = ({_id, date, comment, sum, category, type, balance}) => {

    return (
        <TransactionDesctopCardList>
            <TransactionDesctopCardListItem className='transaction-card-list-item content' type={type} >
                <span className='transaction__value date'>{date.day}/{date.month}/{date.year}</span>
                <span className='transaction__value type'>{type === "income" ? "+" : "-"}</span>
                <span className='transaction__value category'>{category}</span>
                <span className='transaction__value comment'>{comment}</span>
                <span className='transaction__value sum'>{sum}</span>
                <span className='transaction__value balance'>{balance}</span>
            </TransactionDesctopCardListItem>
        </TransactionDesctopCardList>
    )
}
