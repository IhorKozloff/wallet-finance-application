
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchAllTransactions, fetchCategories } from "./transactionsOperations";

const transactions = createReducer([],{

    [fetchAllTransactions.fulfilled]: (state, action) => {
        return state = action.payload;
    }

});

const isLoading = createReducer(false,{

    [fetchAllTransactions.pending]: state => state = true,
    [fetchAllTransactions.fulfilled]: state => state = false,
    [fetchAllTransactions.rejected]: state => state = false

});

const error = createReducer('',{

    [fetchAllTransactions.rejected]: (state, action) => {
        return state = action.payload;
    }

});

const categories = createReducer([], {
    [fetchCategories.fulfilled]: (state, action) =>{ 
        return state = action.payload
    }
})

export default combineReducers({
    transactions,
    categories,
    isLoading,
    error
});