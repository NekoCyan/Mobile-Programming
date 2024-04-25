export type DocumentList<T> = {
	list: T[];
	currentPage: number;
	totalPage: number;
};

export interface ProductData {
	productId: number;
	name: string;
	description: string;
	details: string;
	price: number;
	stock: number;
	sold: number;
	isNewProduct: boolean;
	salePercentage: number;
	imageUrls: string[];
	categoryIds: number[];
	status: boolean;
}

export type NekoResponse<T> = {
	message: string;
	code: number;
	success: boolean;
	data: T;
};
