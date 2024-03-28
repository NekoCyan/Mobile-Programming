import { StyleSheet, Text, View } from 'react-native';

export default function Wishlist() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				You have no wishlist item.
				{'\n'}
				Go shopping and fine one ~
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
	},
});
