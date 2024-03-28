import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductShower({ props }: any) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.productImage}
				source={require('../../../assets/MeowFood.jpg')}
				alt='meow food'
			/>
			<View style={styles.productText}>
				<Text style={styles.productTitle}>MEOW FOOD MIX</Text>
				<Text style={styles.productDescription}>
					Meow Mix Tender Centers Salmon & White Meat Chicken Dry Cat
					Food
				</Text>
				<Text style={styles.productPrice}>$5.00</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.navigation.navigate('Buy')}
			>
				<Text style={styles.buttonText}>Select this</Text>
				<Ionicons name='cart' size={35} />
			</TouchableOpacity>
		</View>
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
	},
	productTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		justifyContent: 'flex-start',
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
	button: {
		borderColor: '#1484f5',
		borderWidth: 1,
		borderRadius: 10,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
	buttonText: {
		fontSize: 15,
	},
});
