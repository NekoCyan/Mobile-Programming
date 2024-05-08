import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { CartState, cartAction } from '../../../redux/cart/CartSlice';
import { getProduct } from '../../../redux/helper';
import { RootDispatch, RootState } from '../../../redux/store';
import { FormatCurrency } from '../../../utils/Utilities';

const totalProducts = 10;

export default function Cart(props: any) {
	const carts = useSelector<RootState, CartState['value']>(
		(state) => state.cart.value,
	);
	const dispatch: RootDispatch = useDispatch();

	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (!isSubmitting) return;

		setTimeout(() => {
			props.navigation.replace('Thanks');
			setIsSubmitting(false);
		}, 1000);
		setTimeout(() => {
			dispatch(cartAction.clearCart());
		}, 1500);
	}, [isSubmitting]);

	return carts.length > 0 ? (
		<View style={styles.container}>
			<View style={{ height: '90%', paddingBottom: 10 }}>
				<ScrollView contentContainerStyle={styles.cartContainer}>
					{carts.map((data, index) => {
						const product = getProduct(data.id);
						if (!product) {
							dispatch(
								cartAction.setCart({
									id: data.id,
									quantity: 0,
								}),
							);
							return null;
						}
						const { id, name, price, image } = product;
						const { quantity } = data;

						return (
							<View key={id} style={styles.cart}>
								<Text style={styles.index}>{index + 1}.</Text>
								<View
									style={{
										flex: 1,
									}}
								>
									<TouchableOpacity
										style={{
											flexDirection: 'row',
											gap: 5,
										}}
										onPress={() =>
											props.navigation.navigate('Buy', {
												id,
											})
										}
									>
										<Image
											style={styles.productImage}
											source={image}
											alt={name}
										/>

										<View style={styles.productText}>
											<Text
												numberOfLines={2}
												style={styles.productTitle}
											>
												{name}
											</Text>
											<Text style={styles.productPrice}>
												{FormatCurrency(price)}
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View style={styles.quantity}>
									<TouchableOpacity
										onPress={() => {
											dispatch(
												cartAction.insertCart({
													id,
													quantity: 1,
												}),
											);
										}}
									>
										<Text style={styles.quantityButtonText}>
											+
										</Text>
									</TouchableOpacity>
									<Text style={styles.quantityText}>
										{quantity}
									</Text>
									<TouchableOpacity
										onPress={() => {
											if (quantity === 1) return;

											dispatch(
												cartAction.insertCart({
													id,
													quantity: -1,
												}),
											);
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
						{FormatCurrency(
							carts.reduce(
								(total, data) =>
									total +
										(getProduct(data.id)?.price ?? 0) *
											data.quantity || 0,
								0,
							),
						)}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => setIsSubmitting(true)}
					disabled={isSubmitting}
				>
					<Text style={styles.checkoutButtonText}>
						{isSubmitting ? 'Processing' : 'Buy Now'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	) : (
		<View style={styles.emptyView}>
			<Text style={styles.emptyText}>Your cart is empty.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginTop: 60,
		flex: 1,
	},
	cartContainer: {
		display: 'flex',
		gap: 25,
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
		justifyContent: 'space-evenly',
	},
	productTitle: {
		fontWeight: 'bold',
		fontSize: 20,
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
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#1484f5',
		borderRadius: 10,
		fontSize: 18,
	},
	emptyView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontSize: 20,
		textAlign: 'center',
	},
});
