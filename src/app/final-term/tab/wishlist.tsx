import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductShower from '../../../component/productShower';
import { getProduct } from '../../../redux/helper';
import { RootDispatch, RootState } from '../../../redux/store';
import {
	WishlistAction,
	WishlistState,
} from '../../../redux/wishlist/WishlistSlice';

export default function Wishlist(props: any) {
	const wishlist = useSelector<RootState, WishlistState['value']>(
		(state) => state.wishlist.value,
	);
	const dispatch = useDispatch<RootDispatch>();

	return wishlist.length > 0 ? (
		<ScrollView display={'flex'} flexDirection={'column'} mt={20} mx={2}>
			{wishlist.map((data, index) => {
				const product = getProduct(data);
				if (!product) {
					dispatch(WishlistAction.toggle(data));
					return null;
				}

				return (
					<View
						key={product.id}
						display={'flex'}
						flexDirection={'row'}
						alignItems={'center'}
						style={{}}
					>
						<TouchableOpacity
							onPress={() =>
								dispatch(WishlistAction.toggle(product.id))
							}
						>
							<Ionicons
								name={'trash'}
								size={30}
								color='red'
								style={{ padding: 10 }}
							/>
						</TouchableOpacity>
						<ProductShower data={product} props={props} />
					</View>
				);
			})}
		</ScrollView>
	) : (
		<View style={styles.containerEmpty}>
			<Text style={styles.textEmpty}>
				You have no wishlist item.
				{'\n'}
				Go shopping and love one ~
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	containerEmpty: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textEmpty: {
		fontSize: 20,
		textAlign: 'center',
	},
});
