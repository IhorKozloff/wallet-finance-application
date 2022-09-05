import { TransactionCardList, TransactionCardListItem } from './TransactionCard.styled';

export const TransactionCard = ({_id, date, comment, sum, category, type, balance}) => {




    return (

            <TransactionCardList>
                <TransactionCardListItem>
                    <span className='transaction__tittle date'>Date</span>
                    <span className='transaction__value date'>{date.day}/{date.month}/{date.year}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle type'>Type</span>
                    <span className='transaction__value type'>{type === "income" ? "+" : "-"}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle category'>Category</span>
                    <span className='transaction__value category'>{category}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle comment'>Comment</span>
                    <span className='transaction__value comment'>{comment}</span>
                </TransactionCardListItem>

                <TransactionCardListItem type={type}>
                    <span className='transaction__tittle sum'>Sum</span>
                    <span className='transaction__value sum'>{sum}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle balance'>Balance</span>
                    <span className='transaction__value balance'>{balance}</span>
                </TransactionCardListItem>

            </TransactionCardList>
    )
}
