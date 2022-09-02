import { TransactionTableList, TransactionTableItem } from './TransactionTable.styled';
import { TransactionCard } from './TransactionTableItem/TransactionCard';


export const TransactionTable = () => {



    return (
        <TransactionTableList>

            <TransactionTableItem>
                <TransactionCard/>
            </TransactionTableItem>

            <TransactionTableItem>
                <TransactionCard/>
            </TransactionTableItem>
            
        </TransactionTableList>
    )
}