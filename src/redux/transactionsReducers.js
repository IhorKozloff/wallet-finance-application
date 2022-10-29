
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchAllTransactions, fetchCategories } from "./transactionsOperations";
import { fetchLogout } from "./authOperations";

const transactions = createReducer([],{

    [fetchAllTransactions.fulfilled]: (state, action) => {
        return state = action.payload;
    },
    [fetchLogout.fulfilled]:  state => state = []

});

const isLoading = createReducer(false,{

    [fetchAllTransactions.pending]: state => state = true,
    [fetchAllTransactions.fulfilled]: state => state = false,
    [fetchAllTransactions.rejected]: state => state = false,

    [fetchCategories.pending]: state => state = true,
    [fetchCategories.fulfilled]: state => state = false,
    [fetchCategories.rejected]: state => state = false,

});

const error = createReducer('',{

    [fetchAllTransactions.rejected]: (state, action) => {
        return state = action.payload;
    }

});

const categories = createReducer({
    expenseData: [],
    incomeData: 0
}, {
    [fetchCategories.fulfilled]: (state, action) => { 

        state.incomeData = action.payload.income
        state.expenseData = action.payload.expense
        
    },
    [fetchLogout.fulfilled]:  state => {
        state.incomeData = []
        state.expenseData = 0
    }
})

export default combineReducers({
    transactions,
    categories,
    isLoading,
    error
});