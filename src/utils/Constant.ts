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

export const CAT_IMAGES = [
	require('../assets/Cat_Hehe_1.jpeg'),
	require('../assets/Cat_Hehe_2.jpeg'),
	require('../assets/Cat_Hehe_3.jpeg'),
];

/**
 * * Meow Mix - https://www.meowmix.com/
 *
 */
export const PRODUCTS = [
	{
		id: 1,
		name: 'Tasty Layers - Swirled PâTé',
		description:
			'Take mealtime to the next level with three indulgent flavors of Meow Mix® Tasty Layers™ in the Swirled Paté variety pack. You’ll find four (4) cups of each delicious Swirled Paté cat food flavor: Chicken & Tuna, Tuna & Whitefish, and Chicken & Turkey. Each dual-flavored variety is stuffed with real chicken or tuna to give cats an extra-unique and tasty treat.',
		price: 7,
		image: require('../assets/MeowFood1.jpg'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Wet Food'],
	},
	{
		id: 2,
		name: 'Tender Centers',
		description:
			'Combining the best parts of dry kibble and wet food, Meow Mix® Tender Centers Basted Bites offers a delicious flavor and texture that your cat will love. This dry cat food pairs a crunchy outer layer with a soft, meaty center for a tasty, dual-texture combination. This delicious chicken- and tuna-flavored dry cat food features basted bites, which add an extra taste sensation your cat is sure to enjoy. With 100 percent complete balanced nutrition, the formula meets your cat’s daily dietary needs. And since this dry cat food also includes essential vitamins and minerals, it is a nutritionally sound choice for your feline friend. The variety of tastes and textures will delight your cat at every meal.',
		price: 10,
		image: require('../assets/MeowFood2.jpg'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Dry Food'],
	},
	{
		id: 3,
		name: 'Original Choice',
		description:
			"With the delicious flavors of chicken, turkey, salmon, and ocean fish, cats ask for Meow Mix® Original Choice cat food by name. It's the perfect mix to help you connect with your cat over a healthy meal.",
		price: 5,
		image: require('../assets/MeowFood3.jpg'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Dry Food'],
	},
	{
		id: 4,
		name: 'Indoor Health',
		description:
			"Meow Mix® Indoor Health dry cat food has been specially formulated to help your indoor cat maintain a healthy weight when fed according to the feeding directions. With wholesome ingredients and irresistible taste, no wonder it's the only one that cats ask for by name!!",
		price: 8,
		image: require('../assets/MeowFood4.jpg'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Dry Food'],
	},
	{
		id: 5,
		name: "Kitten Li'l Nibbles",
		description:
			"The tasty smaller kibbles in our Kitten Li'l Nibbles® dry cat food contain all essential nutrients needed to help kittens grow up healthy and happy. High-quality protein and essential fatty acids help support muscle growth and healthy brain development. Wholesome ingredients and irresistible flavors make this more than just a meal...it's Meow Mix Mealtime!",
		price: 4,
		image: require('../assets/MeowFood5.jpg'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Dry Food'],
	},
	{
		id: 6,
		name: 'Irresistibles Soft',
		description:
			'Now you can get closer to your cat any time with a tasty little treat! Meow Mix Irresistibles® are made With REAL Chicken and no artificial flavors so you can feel good about treating. These cat treats have a delicious taste and soft texture your cat will love which makes them perfect for sharing more special moments together!',
		price: 9,
		image: require('../assets/MeowFood6.png'),
		categories: ['Food', 'Meow Food', 'Meow Mix', 'Dry Food'],
	},
];
