import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart/CartSlice';

export const store = configureStore({
	reducer: {
		cart: CartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
