import { useEffect, useState } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import NotFound from '../../../component/error/notFound';
import { cartAction } from '../../../redux/cart/CartSlice';
import { RootDispatch } from '../../../redux/store';
import { PRODUCTS } from '../../../utils/Constant';
import { FormatCurrency, RandomNumber } from '../../../utils/Utilities';

export default function Buy(props: any) {
	const { id } = props.route.params;
	const product = PRODUCTS.find((x) => x.id === parseInt(id));
	
	const dispatch: RootDispatch = useDispatch();

	const [quantity, setQuantity] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (!isSubmitting) return;

		setTimeout(() => {
			dispatch(cartAction.insertCart({ id: product.id, quantity }));
			props.navigation.goBack();
		}, RandomNumber(100, 800)); // Gacha time :>
	}, [isSubmitting]);

	const handleQuantity = (value: number) => {
		setQuantity(value + quantity <= 1 ? 1 : value);
	};
	const handleQuantityUp = () => {
		handleQuantity(quantity + 1);
	};
	const handleQuantityDown = () => {
		handleQuantity(quantity - 1);
	};

	return product ? (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.product}>
				<Image
					style={styles.image}
					source={product.image}
					alt={product.name}
				/>
				<Text style={styles.productName}>{product.name}</Text>
				<Text style={styles.productDescription}>
					{product.description}
				</Text>
				<Text style={styles.productPrice}>
					{FormatCurrency(product.price)}
				</Text>
			</View>
			<View style={styles.modifier}>
				<TouchableOpacity
					onPress={handleQuantityDown}
					disabled={isSubmitting}
				>
					<Text style={styles.modifierText}>-</Text>
				</TouchableOpacity>
				<Text style={styles.quantityText}>{quantity}</Text>
				<TouchableOpacity
					onPress={handleQuantityUp}
					disabled={isSubmitting}
				>
					<Text style={styles.modifierText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.price}>
				<Text style={styles.priceTotallyText}>Totally: </Text>
				<Text style={styles.priceTotally}>
					{FormatCurrency(quantity * product.price)}
				</Text>
			</View>
			<View style={styles.button}>
				<TouchableOpacity onPress={() => setIsSubmitting(true)}>
					<Text style={styles.btnText}>
						{isSubmitting ? 'Adding...' : 'Add To Cart'}
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	) : (
		<NotFound props={props} />
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingBottom: 100,
		paddingLeft: 20,
		paddingRight: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30,
	},
	product: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 15,
	},
	image: {
		width: 300,
		height: 350,
	},
	productName: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	productDescription: {
		fontSize: 15,
		textAlign: 'justify',
	},
	productPrice: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FF0000',
	},
	modifier: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 40,
	},
	modifierText: {
		backgroundColor: '#1484f5',
		width: 50,
		height: 40,
		fontSize: 30,
		justifyContent: 'center',
		textAlign: 'center',
		color: 'white',
	},
	quantityText: {
		fontSize: 30,
	},
	price: {
		display: 'flex',
		flexDirection: 'row',
	},
	priceTotallyText: {
		fontSize: 25,
		color: 'black',
	},
	priceTotally: {
		fontSize: 25,
		color: '#FF0000',
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	btnText: {
		padding: 20,
		paddingLeft: 30,
		paddingRight: 30,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#1484f5',
		borderRadius: 10,
		fontSize: 20,
	},
});
