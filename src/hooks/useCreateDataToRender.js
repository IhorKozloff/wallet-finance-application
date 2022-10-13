import { useSelector } from "react-redux";
import { calculateBalance, transactionsSortDateAscending } from "helpers";


export const useCreateDataToRender = () => {

    const data = useSelector(state => state.allTransactionsStoreData.data);
    const sortedData = transactionsSortDateAscending(data);

   const [totalBalance, balancedData] = calculateBalance(sortedData);

   return {
    totalBalance,
    balancedData
   }
}