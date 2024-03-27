import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Tuan4Bai4() {
	const [border, setBorder] = useState(randomNumber(0, 100));
	console.log(`border`, border);

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.button}
				onPress={() => setBorder(randomNumber(0, 100))}
			>
				<Text style={styles.text}>Đổi borderRadius</Text>
			</Pressable>
			<View style={[styles.circle, { borderRadius: border }]}>
				<Text style={[styles.text, { fontSize: 35 }]}>{border}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		gap: 10,
	},
	button: {
		width: 200,
		height: 50,
		borderRadius: 20,
		borderColor: 'blue',
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: { textAlign: 'center', fontSize: 20 },
	circle: {
		width: 200,
		height: 200,
		borderWidth: 3,
		borderColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
