import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart/CartSlice';
import UserSlice from './user/UserSlice';
import WishlistSlice from './wishlist/WishlistSlice';

export const store = configureStore({
	reducer: {
		cart: CartSlice,
		wishlist: WishlistSlice,
		user: UserSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
