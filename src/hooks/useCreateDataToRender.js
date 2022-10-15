import { useSelector } from "react-redux";
import { calculateBalance, transactionsSortDateAscending } from "helpers";


export const useCreateDataToRender = () => {

    const { transactions } = useSelector(state => state.allTransactionsStoreData);
    const sortedData = transactionsSortDateAscending(transactions);

   const [totalBalance, balancedData] = calculateBalance(sortedData);

   return {
    totalBalance,
    balancedData
   }
}