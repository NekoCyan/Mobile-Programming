import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenNavigationProps } from '../../../types';

export default function Thanks(props: any) {
	const navigation = useNavigation<ScreenNavigationProps>();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Your request is processing.{'\n'}Thanks for purchasing!
			</Text>
			<TouchableOpacity
				onPress={() => {
					navigation.replace('IndexTab', { screen: 'Dashboard' });
				}}
			>
				<Text style={styles.btnText}>Back to Dashboard</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30,
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
	},
	btnText: {
		color: '#1484f5',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		fontSize: 30,
	},
});
