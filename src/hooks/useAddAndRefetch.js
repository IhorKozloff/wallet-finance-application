import { onAddTransactionAPI } from "API";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/transactionsOperations";


export const useAddAndRefetch = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.userStatus.user);

    return async (data) => {

        const response = await onAddTransactionAPI(data, token);
  
        if (response) {
            dispatch(fetchAllTransactions(token));
        }
        
    };
};
