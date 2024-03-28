import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const totalProducts = 10;

export default function Cart(props: any) {
	const [quantity, setQuantity] = useState(
		new Array(totalProducts).fill(1) as number[],
	);

	return (
		<View style={styles.container}>
			<View style={{ height: '90%', paddingBottom: 10 }}>
				<ScrollView contentContainerStyle={styles.cartContainer}>
					{Array.from({ length: totalProducts }).map((_, index) => {
						return (
							<View key={index} style={styles.cart}>
								<Text style={styles.index}>{index + 1}.</Text>
								<Image
									style={styles.productImage}
									source={require('../../../assets/MeowFood.jpg')}
									alt='meow food'
								/>
								<View style={styles.productText}>
									<Text style={styles.productTitle}>
										MEOW FOOD MIX
									</Text>
									<Text style={styles.productPrice}>
										$5.00
									</Text>
								</View>
								<View style={styles.quantity}>
									<TouchableOpacity
										onPress={() => {
											const allQuantity = quantity;
											allQuantity[index] += 1;
											setQuantity([...allQuantity]);
										}}
									>
										<Text style={styles.quantityButtonText}>
											+
										</Text>
									</TouchableOpacity>
									<Text style={styles.quantityText}>
										{quantity[index]}
									</Text>
									<TouchableOpacity
										onPress={() => {
											const allQuantity = quantity;
											if (allQuantity[index] <= 1) {
												allQuantity[index] = 1;
											} else allQuantity[index] -= 1;
											setQuantity([...allQuantity]);
										}}
									>
										<Text style={styles.quantityButtonText}>
											-
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						);
					})}
				</ScrollView>
			</View>
			<View style={styles.checkoutContainer}>
				<View style={styles.price}>
					<Text style={styles.priceTotallyText}>Totally: </Text>
					<Text style={styles.priceTotally}>
						${quantity.reduce((pre, cur) => pre + cur, 0) * 5}.00
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('Thanks')}
				>
					<Text style={styles.checkoutButtonText}>Buy Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginTop: 30,
		flex: 1,
		justifyContent: 'space-between',
	},
	cartContainer: {
		display: 'flex',
		gap: 50,
	},
	cart: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	index: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	productImage: {
		width: 70,
		height: 100,
	},
	productText: {
		flex: 1,
	},
	productTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		justifyContent: 'flex-start',
	},
	productPrice: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FF0000',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	quantity: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	quantityText: {
		fontSize: 18,
	},
	quantityButtonText: {
		width: 50,
		height: 30,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#1484f5',
		borderRadius: 10,
		fontSize: 20,
		textAlign: 'center',
		alignContent: 'center',
	},
	checkoutContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingTop: 10,
		borderTopColor: 'black',
		borderTopWidth: 1,
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
	checkoutButtonText: {
		width: 120,
		height: 50,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#1484f5',
		borderRadius: 10,
		fontSize: 18,
		textAlign: 'center',
		alignContent: 'center',
	},
});
