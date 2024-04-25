export const API = `https://ecommerce.nekonyan.site/api`;
// export const API = `http://localhost:3000/api`;

export const ROUTES = {
	CategoriesList: '/categories',	
	CategoriesNew: '/categories',
	CategoriesEdit: (id: string) => `/categories/${id}`,
	CategoriesDelete: (id: string) => `/categories/${id}`,
	ProductsList: '/products',
	ProductsNew: '/products',
	ProductsGet: (id: string) => `/products/${id}`,
	ProductsEdit: (id: string) => `/products/${id}`,
	ProductsDelete: (id: string) => `/products/${id}`,
};
