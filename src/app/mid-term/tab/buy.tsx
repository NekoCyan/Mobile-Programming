import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Buy(props: any) {
	const [quantity, setQuantity] = useState(1);

	return (
		<View style={styles.container}>
			<View style={styles.product}>
				<Image
					style={styles.image}
					src={require('../../../assets/MeowFood.jpg')}
					alt='meow food'
				/>
				<Text style={styles.productName}>MEOW FOOD MIX</Text>
				<Text style={styles.productPrice}>$5.00</Text>
			</View>
			<View style={styles.modifier}>
				<TouchableOpacity
					onPress={() =>
						setQuantity(quantity <= 1 ? 1 : quantity - 1)
					}
				>
					<Text style={styles.modifierText}>-</Text>
				</TouchableOpacity>
				<Text style={styles.quantityText}>{quantity}</Text>
				<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
					<Text style={styles.modifierText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.price}>
				<Text style={styles.priceTotallyText}>Totally: </Text>
				<Text style={styles.priceTotally}>${quantity * 5}.00</Text>
			</View>
			<View style={styles.button}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('Cart')}
				>
					<Text style={styles.btnText}>Add To Cart</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('Thanks')}
				>
					<Text style={styles.btnText}>Buy Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 50,
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
	},
	image: {
		width: 300,
		height: 350,
	},
	productName: {
		fontSize: 25,
		fontWeight: 'bold',
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
		height: 50,
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
		width: 150,
		height: 70,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#1484f5',
		borderRadius: 10,
		fontSize: 20,
		textAlign: 'center',
		alignContent: 'center',
	}
});
