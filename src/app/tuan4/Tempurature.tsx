import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Tempurature() {
	const [value, setValue] = useState(0);
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
		flex: 1,
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
});
