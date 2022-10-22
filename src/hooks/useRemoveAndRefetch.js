import { removeTransactionAPI } from "API";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTransactions } from "redux/transactionsOperations";


export const useRemoveAndRefetch = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.userStatus.user);

    return async (id) => {

        const { status } = await removeTransactionAPI(id, token);
  
        if (status === 200) {
            dispatch(fetchAllTransactions(token));
        } else {
            console.log('Hook выдал ошибку. Хук - юзРемувАндРефетч')
        }
        
    };
};
