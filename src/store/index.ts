import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './plantSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    plants: plantReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;