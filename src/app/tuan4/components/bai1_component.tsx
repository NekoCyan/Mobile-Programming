import { Image, StyleSheet, Text, View } from 'react-native';

export default function Tuan4Bai1Component(
	props: Readonly<{
		title: string;
		likes: number;
		loves: number;
	}>,
) {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../../assets/profile.png')}
				style={{ width: 70, height: 70 }}
			/>
			<Text style={styles.text}>{props.title}</Text>
			<Text style={styles.text}>
				{props.likes} likes - {props.loves} loves
			</Text>
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
