import {configureStore} from '@reduxjs/toolkit';
import walletSlice from './walletSlice';
;



export const store = configureStore({
    reducer: {
        money: walletSlice,
    },
})