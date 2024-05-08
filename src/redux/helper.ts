import { PRODUCTS } from '../utils/Constant';

export function getProduct(id: number) {
	return PRODUCTS.find((x) => x.id === id);
}
