import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name:'currency',
    initialState:{
        symbol:'USD',
        format:'en-US',
    },
    reducers: {
        switchCurrencyFormat(state) {
            state.symbol = state.symbol === 'USD' ? 'VND' : 'USD';
            state.format = state.format === 'en-US' ? 'USD' : 'en-US';
        }
    }
});

export const { switchCurrencyFormat } = currencySlice.actions;
export default currencySlice.reducer;