import { configureStore } from '@reduxjs/toolkit';
import allTransactionsStoreDataReducer from "./transactionsReducers";
import authReducer from "./authReducers";
import storage from 'redux-persist/lib/storage'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const financePersistConfig = {
    key: 'finance',
    storage,
}
const userPersistConfig = {
    key: 'user',
    storage,
}

const financePersistedReducer = persistReducer(financePersistConfig, allTransactionsStoreDataReducer);
const userPersistedReducer = persistReducer(userPersistConfig, authReducer);

export const globalStore = configureStore({
    reducer: {
        allTransactionsStoreData: financePersistedReducer,
        userStatus: userPersistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(globalStore)