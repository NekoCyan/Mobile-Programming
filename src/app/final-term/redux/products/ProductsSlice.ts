import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../../../../types';

interface ProductsState {
	value: ProductData[];
}

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		value: [],
	} as ProductsState,
	reducers: {
		insertProduct: (
			state,
			action: PayloadAction<ProductData | ProductData[]>,
		) => {
			const productsAction = Array.isArray(action.payload)
				? action.payload
				: [action.payload];
			for (const product of productsAction) {
				const existingProductIndex = state.value.findIndex(
					(p) => p.productId === product.productId,
				);
				if (existingProductIndex !== -1) {
					state.value[existingProductIndex] = product;
				} else {
					state.value.push(product);
				}
			}
		},
	},
});

export const { insertProduct } = productsSlice.actions;
export default productsSlice.reducer;
