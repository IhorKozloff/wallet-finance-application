import { createAsyncThunk } from '@reduxjs/toolkit';
import { userLoginAPI, userLogoutAPI } from 'API/authAPI';



export const fetchLogin = createAsyncThunk('fetchLogin', async (authData) => {
    const response = await userLoginAPI(authData);
    console.log(response.data);
    return response.data
});

export const fetchLogout = createAsyncThunk('fetchLogout', async (token) => {
    await userLogoutAPI(token);
});
