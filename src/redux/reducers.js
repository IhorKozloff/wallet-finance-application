
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchAllTransactions } from "./operations";

const data = createReducer([],{

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

export default combineReducers({
    data,
    isLoading,
    error
});