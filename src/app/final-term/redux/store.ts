import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './products/ProductsSlice';

export const store = configureStore({
	reducer: {
		products: ProductsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
