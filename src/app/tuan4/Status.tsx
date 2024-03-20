import { Image, StyleSheet, Text, View } from 'react-native';

export default function Status(
	props: Readonly<{ title: string; description: string }>,
) {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/profile.png')}
				style={{ width: 70, height: 70 }}
			/>
			<Text style={styles.text}>{props.title}</Text>
			<Text style={styles.text}>{props.description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
});
