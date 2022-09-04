import { configureStore } from '@reduxjs/toolkit';

import debtsReducer from './debts/debtsSlice';

const store = configureStore({
    reducer: {
        debts: debtsReducer,
    },
    devTools: process.env.NODE_ENV === 'production',
});


export default store