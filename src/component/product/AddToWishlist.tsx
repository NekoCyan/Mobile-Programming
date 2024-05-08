import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export interface AddToWishlistProps {
	isFavorited: boolean;
	onPress: () => void;
}

export default function AddToWishlistButton({
	isFavorited,
	onPress,
}: Readonly<AddToWishlistProps>) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Ionicons
				name={isFavorited ? 'heart' : 'heart-outline'}
				size={25}
				color='red'
				style={{ padding: 10 }}
			/>
		</TouchableOpacity>
	);
}
