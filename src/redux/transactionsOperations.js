import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTransactionsAPI } from 'API';

export const fetchAllTransactions = createAsyncThunk('fetchAllTransactions', async (token) => {
    const response = await getAllTransactionsAPI(token);
    return response
});