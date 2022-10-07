import { configureStore } from '@reduxjs/toolkit';
import allTransactionsStoreDataReducer from "./reducers";


export const globalStore = configureStore({
    reducer: {
        allTransactionsStoreData: allTransactionsStoreDataReducer
    }
});