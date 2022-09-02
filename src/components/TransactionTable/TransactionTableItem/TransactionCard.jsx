import { TransactionCardList, TransactionCardListItem } from './TransactionCard.styled';

export const TransactionCard = () => {




    return (

            <TransactionCardList>
                <TransactionCardListItem>
                    <span className='transaction__tittle date'>Date</span>
                    <span className='transaction__value date'>04.01.19</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle type'>Type</span>
                    <span className='transaction__value type'>-</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle category'>Category</span>
                    <span className='transaction__value category'>Other</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle comment'>Comment</span>
                    <span className='transaction__value comment'>Gift of you life</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle sum'>Sum</span>
                    <span className='transaction__value sum'>300.00</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className='transaction__tittle balance'>Balance</span>
                    <span className='transaction__value balance'>6 900.00</span>
                </TransactionCardListItem>

            </TransactionCardList>
    )
}
