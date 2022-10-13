import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchLogin, fetchLogout } from "./authOperations";
import Notiflix from 'notiflix';




const user = createReducer(
    {
        name: null,
        email: null,
        token: null
    },
    {

        [fetchLogin.fulfilled]: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },

        [fetchLogout.fulfilled]: state => {
            state.name = null;
            state.email = null;
            state.token = null;
        },

    },
);

const isLoading = createReducer(
    false,
    {
        [fetchLogin.fulfilled]: state => state = false,
        [fetchLogin.pending]: state => state = true,
        [fetchLogin.rejected]: state => state = false
    }
);

const isLogin = createReducer(
    false,
    {
        [fetchLogin.fulfilled]:  state => state = true,
        [fetchLogout.fulfilled]:  state => state = false,
        
    },
);
const errorLogin = createReducer(
    null,
    {
        [fetchLogin.rejected]:  (state, action) => {
            Notiflix.Notify.failure('User with this email does not exist');
            return state = action.error;
        },
        [fetchLogin.pending]: state => state = null,
    }
)


export default combineReducers({
    user,
    isLoading,
    isLogin,
    errorLogin,

});