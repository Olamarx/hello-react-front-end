import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './greeting';

const store = configureStore({
  reducer: {
    displayGreetings: reducer,
  },
});

export default store;
