import { TransactionCardList, TransactionCardListItem } from './TransactionMobileCard.styled';
import { TransactionRemoveBtn } from "./TransactionRemoveBtn/TransactionRemoveBtn";
import { useRemoveAndRefetch } from 'hooks/useRemoveAndRefetch';

export const TransactionMobileCard = ({_id, date, comment, sum, category, type, balance}) => {

        const removeAndRefetch = useRemoveAndRefetch();

        const hendleRemoveButtonClick = async () => {

            removeAndRefetch(_id);
        }
        
        return (
            <>
                <TransactionCardList>
                    <TransactionCardListItem>
                        <TransactionRemoveBtn removeAction={hendleRemoveButtonClick}/>
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
            </>
            
    )
}
        //     <TransactionCardListItem className='transaction-card-list-item content'>
        //         <span className='transaction__value date'>{date.day}/{date.month}/{date.year}</span>
        //         <span className='transaction__value type'>{type === "income" ? "+" : "-"}</span>
        //         <span className='transaction__value category'>{category}</span>
        //         <span className='transaction__value comment'>{comment}</span>
        //         <span className='transaction__value sum'>{sum}</span>
        //         <span className='transaction__value balance'>{balance}</span>
        //     </TransactionCardListItem>
        // </TransactionCardList> 