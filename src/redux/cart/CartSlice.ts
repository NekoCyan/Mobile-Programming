import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProduct } from '../helper';

export interface CartState {
	value: {
		id: number;
		quantity: number;
	}[];
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		value: [],
	} as CartState,
	reducers: {
		insertCart: (state, action: PayloadAction<CartState['value'][0]>) => {
			const cartAction = Array.isArray(action.payload)
				? action.payload
				: [action.payload];
			for (const cart of cartAction) {
				if (!getProduct(cart.id)) continue;

				const existingCartIndex = state.value.findIndex(
					(p) => p.id === cart.id,
				);
				if (existingCartIndex !== -1) {
					state.value[existingCartIndex].quantity += cart.quantity;

					if (state.value[existingCartIndex].quantity <= 0) {
						state.value.splice(existingCartIndex, 1);
					}
				} else {
					state.value.push(cart);
				}
			}
		},
		setCart(state, action: PayloadAction<CartState['value'][0]>) {
			const cart = action.payload;
			if (!getProduct(cart.id)) return;

			const existingCartIndex = state.value.findIndex(
				(p) => p.id === cart.id,
			);

			if (cart.quantity <= 0 && existingCartIndex !== -1) {
				state.value.splice(existingCartIndex, 1);
			} else if (existingCartIndex !== -1) {
				state.value[existingCartIndex].quantity += cart.quantity;
			} else {
				state.value.push(cart);
			}
		},
		clearCart(state) {
			state.value = [];
		},
	},
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
