import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  anualCosts: [
    { id: 1, name: '주거비용', value: 0 },
    { id: 2, name: '생활비', value: 0 },
    { id: 3, name: '자동차', value: 0 },
    { id: 4, name: '여행', value: 0 },
    { id: 5, name: '취미', value: 0 },
    { id: 6, name: '비상금', value: 0 },
    { id: 7, name: '기타', value: 0 },
  ],
};

const reducers = {
  increment: state => {
    state.value += 1;
  },
};

export const anualCostSlice = createSlice({
  name: 'anualCosts',
  initialState: INITIAL_STATE,
  reducers: reducers,
});

export const { increment } = anualCostSlice.actions;
export default anualCostSlice.reducer;
export const selectAnualcosts = state => state.anualCosts;
