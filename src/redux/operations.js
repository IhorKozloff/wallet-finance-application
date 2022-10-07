import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTransactionsAPI } from 'API';

export const fetchAllTransactions = createAsyncThunk('fetchAllTransactions', async () => {
    const response = await getAllTransactionsAPI();
    return response
});