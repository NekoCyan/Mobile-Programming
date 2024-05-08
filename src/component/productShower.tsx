import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { WishlistState } from '../redux/wishlist/WishlistSlice';
import { FormatCurrency } from '../utils/Utilities';

export interface ProductShowerProps {
	props: any;
	data: {
		id: number;
		name: string;
		description: string;
		price: number;
		image: any;
	};
}

export default function ProductShower({
	props,
	data,
}: Readonly<ProductShowerProps>) {
	const { id, name, description, price, image } = data;

	const wishlist = useSelector<RootState, WishlistState['value']>(
		(state) => state.wishlist.value,
	);

	const isFavorited = wishlist.includes(id);

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => props.navigation.navigate('Buy', { id })}
		>
			<Image style={styles.productImage} source={image} alt='name' />
			<View style={styles.productText}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 2,
					}}
				>
					{isFavorited && (
						<Ionicons
							name={
								wishlist.includes(id)
									? 'heart'
									: 'heart-outline'
							}
							size={15}
							color='red'
							style={{ marginTop: 2 }}
						/>
					)}
					<Text style={styles.productTitle} numberOfLines={1}>
						{name}
					</Text>
				</View>
				<Text style={styles.productDescription} numberOfLines={3}>
					{description}
				</Text>
				<Text style={styles.productPrice} numberOfLines={1}>
					{FormatCurrency(price)}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	productImage: {
		width: 70,
		height: 100,
	},
	productText: {
		flex: 1,
		justifyContent: 'space-between',
	},
	productTitle: {
		fontWeight: 'bold',
		fontSize: 15,
		textDecorationLine: 'underline',
	},
	productDescription: {
		fontSize: 15,
	},
	productPrice: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#FF0000',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
});
