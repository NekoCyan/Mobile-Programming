import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Tuan4Bai3_1() {
	const [value, setValue] = useState(25);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Nhiệt độ: {value}°C</Text>
			<Button title='Tăng' onPress={() => setValue(value + 1)} />
			<Button title='Giảm' onPress={() => setValue(value - 1)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 5,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
});
