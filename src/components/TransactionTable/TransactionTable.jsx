import { TransactionTableList, TransactionTableItem } from './TransactionTable.styled';
import { TransactionCard } from './TransactionTableItem/TransactionCard';


export const TransactionTable = ({allTransactions = ''}) => {



    return (
        <TransactionTableList>
            {allTransactions !== '' && allTransactions.map(item => {




                return (
                    <TransactionTableItem key={item._id}>
                        <TransactionCard {...item}/>
                    </TransactionTableItem>
                )
            })}
        </TransactionTableList>
    )
}