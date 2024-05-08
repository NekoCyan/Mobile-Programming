import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProduct } from '../helper';

export interface WishlistState {
	value: number[];
}

const WishlistSlice = createSlice({
	name: 'Wishlist',
	initialState: {
		value: [],
	} as WishlistState,
	reducers: {
		toggle: (
			state,
			action: PayloadAction<WishlistState['value'] | number>,
		) => {
			const WishlistAction = Array.isArray(action.payload)
				? action.payload
				: [action.payload];
			for (const Wishlist of WishlistAction) {
				if (!getProduct(Wishlist)) continue;

				const existingWishlistIndex = state.value.findIndex(
					(p) => p === Wishlist,
				);
				if (existingWishlistIndex !== -1) {
					state.value.splice(existingWishlistIndex, 1);
				} else {
					state.value.push(Wishlist);
				}
			}
		},
	},
});

export const WishlistAction = WishlistSlice.actions;
export default WishlistSlice.reducer;
