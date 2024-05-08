export const API = `https://ecommerce.nekonyan.site/api`;
// export const API = `http://localhost:3000/api`;

export const PATTERN = {
	USERNAME: /^[a-zA-Z0-9_.]+$/, // DEPRECATED.
	EMAIL: /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9]).{8,}$/,
};

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
export const PRODUCTS: {
	id: number;
	name: string;
	description: string;
	price: number;
	image: any;
	categories: string[];
}[] = [
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
	{
		id: 7,
		name: 'Reflex Plus',
		description:
			'Now you can get closer to your cat any time with a tasty little treat! Meow Mix Irresistibles® are made With REAL Chicken and no artificial flavors so you can feel good about treating. These cat treats have a delicious taste and soft texture your cat will love which makes them perfect for sharing more special moments together!',
		price: 9,
		image: require('../assets/MeowFood7.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 8,
		name: 'Reflex Urinary',
		description:
			'Reflex Urinary is cat food designed to support urinary tract health. This cat nut boosts the immune system, helping cats have better overall health.Reflex Urinary is a great choice for adult cats who are experiencing urinary tract problems. The food is appetizing and easy to eat, ensuring to provide the cat with all the necessary nutrients to maintain a good health',
		price: 9,
		image: require('../assets/MeowFood8.jpg'),
		categories: ['Food', 'Meow Food', 'Wet Food'],
	},
	{
		id: 9,
		name: 'Reflex Plus Choose Salmon',
		description:
			'Yucca tree extract helps increase nutrient absorption, odor control. Brewer yeast helps the immune system to be strengthened & livestock productivity is improved. Vitamin A, D3, E, C and mineral supplements.',
		price: 9,
		image: require('../assets/MeowFood9.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 10,
		name: 'WHISKAS Combo 3 Chief Cat Food',
		description:
			'COMPLETE AND BALANCED NUTRITION – WHISKAS PET FOOD IS A BALANCED AND COMPLETE SOURCE OF NUTRITION FOR CATS FROM 1 YEAR OLD',
		price: 9,
		image: require('../assets/MeowFood10.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 11,
		name: 'Royal Canin Hairball Cat Pate for Adult Cats 85gr Petemo',
		description:
			"The nutrition formula of FELINE CARE NUTRITION wet pate is designed based on your cat's nutritional needs and their very instinctive eating preferences.",
		price: 5,
		image: require('../assets/MeowFood11.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 12,
		name: 'Royal Canin Kitten Granules Kitten Food 400g Petemo',
		description:
			'ROYAL CANIN Kitten Kitten food supports kittens health by providing the correct nutrients based on research by scientists from ROYAL CANIN.',
		price: 9,
		image: require('../assets/MeowFood12.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 13,
		name: 'Royal Canin Indoor Cat Grain Adult Cat Food 400g Petemo',
		description:
			"ROYAL CANIN Indoor cat food supports your cat's health by providing accurate nutrition based on a proper understanding of specific needs with over 40 years of research",
		price: 9,
		image: require('../assets/MeowFood13.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 14,
		name: 'Royal Canin British Shorthair Grain food for adult cats 400g Petemo',
		description:
			'These include Omega-3 fatty acids (EPA and DHA) that encourage healthy bones and joints as well as maintain normal energy levels every day.',
		price: 9,
		image: require('../assets/MeowFood14.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 15,
		name: 'Seeds for cats with kidney stones: Royal Canin Urinary S/O Feline',
		description:
			'Dietary supplements have been studied to support urinary tract and bladder health in adult cats.',
		price: 9,
		image: require('../assets/MeowFood15.png'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 16,
		name: 'Royal Canin Fit32 Cat Grain 2kg Petemo Adult Cat Food',
		description:
			'ROYAL CANIN FIT32 Cat Food Supports cat health by providing the correct nutrients based on research by ROYAL CANIN scientists. ROYAL CANIN FIT32 helps support a balanced nutrient system, keep an ideal weight and adjust tufts.',
		price: 9,
		image: require('../assets/MeowFood16.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 17,
		name: 'Dry granules for kittens WHISKAS Junior, 450g.',
		description:
			'Holistic & Balanced Nutrition: Holistic and balanced nutrition in dry granules for kittens WHISKAS is designed to promote a strong and healthy immune system',
		price: 9,
		image: require('../assets/MeowFood17.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 18,
		name: 'WHISKAS Adult Cat Food Pate 400G (cans)',
		description:
			'Nurture your pet cat with delicious WHISKAS cat food cans. The attractive taste, fresh fish meat in WHISKAS cat pate food cans always makes cats excited and craving. For a healthy and active life with complete, balanced nutrition for your cat, buy WHISKAS today!',
		price: 9,
		image: require('../assets/MeowFood18.jpg'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 19,
		name: 'Smartheart Mackerel County',
		description:
			'Smartheart Mackerel granular dry food is a cat food product from the Smartheart brand. This is an extremely famous dog and cat food brand of Thailand and belongs to PCG Group along with Me-o.',
		price: 9,
		image: require('../assets/MeowFood19.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 20,
		name: 'Pate Minino Plus 70g',
		description:
			'Tuna, Chicken, Wheat Flour, Wheat Gluten, Sunflower Oil, Denatured Cassava Starch, Pea Protein, Pumpkin, Sweet Potato, Carrots, Tricalcium Phosphate, Fish Broth, Thickener (Guar Gum), Amino Acids, Potassium Chloride, Choline Chloride, Magnesium Sulphate, Taurine, Tuna Oil, Salt, Iron Proteinase, Zinc Proteinate, Vitamins, Minerals, Water',
		price: 9,
		image: require('../assets/MeowFood20.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 21,
		name: 'Reflex Kitten Dried Seeds Flavored Chicken & Rice - 2kg',
		description:
			"Animal protein (chicken) (dehydrated), cereals (rice, corn, wheat), chicken fat, corn gluten, beets, liver flavor, vitamins and minerals, flaxseed, brewer's yeast, salt, taurine, MOS (yeast cell wall), yucca schidigera extract, antioxidant preservative.",
		price: 9,
		image: require('../assets/MeowFood21.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 22,
		name: "Cat Today's Dinner 7L/ 2.8kg",
		description:
			'Effective deodorizing – Soy ingredients help control odors effectively, minimizing the odor of waste. Fast clumping - Soybean sand has the ability to clump quickly to optimize the amount of sand used.',
		price: 9,
		image: require('../assets/MeowFood22.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 23,
		name: 'Pate Super Cat 85g',
		description:
			'Pate Super Cat for cats packs 85gr for big cats and kittens with 5 flavors from delicious tuna meat and sea fish. Pate is supplemented with omega 3 & 6 to help bring healthy skin and shiny fur. Pate Super Cat is made from nutritious real fish meat.',
		price: 9,
		image: require('../assets/MeowFood23.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 24,
		name: 'AATAS Delight granules for cats',
		description:
			'Corn, Poultry Meal, Rice, Soybean Meal, Corn Gluten, Poultry Fat, Beef Fat, Tuna Meal, Animal Digestible Protein (Chicken, Fish), Vitamins (Vitamin A, Vitamin D3, Vitamin E, Vitamin C, Nicotinic Acid, Vitamin B1, Vitamin B6, Pantothenic Acid, Vitamin B2, Vitamin K3, Folic, Biotin, Vitamin B12), Minerals (Iron, Zinc, Copper, Manganese,  Iodine, Selenium), Salt, Choline Chloride, Tuna Flavour, Dicalcium Phosphate, Salmon Oil, Taurine, Preservative (Propionic Acid), Esterified glucomannan.',
		price: 9,
		image: require('../assets/MeowFood24.webp'),
		categories: ['Food', 'Meow Food'],
	},
	{
		id: 25,
		name: 'V.O.M cat nuts 1.4kg - RX CAT URINARY + MODERATE CALORIES',
		description:
			'Eliminates and prevents secretory stones Control the amount of Na, helping to increase safe water intake Optimal recipe for cat nutrition Helps reduce urinary tract inflammation and antioxidants',
		price: 9,
		image: require('../assets/MeowFood25.webp'),
		categories: ['Food', 'Meow Food'],
	},
];
