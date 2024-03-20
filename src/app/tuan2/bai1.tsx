import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Tuan2Bai1Props = {
	A: number;
	B: number;
};

export default function Tuan2Bai1(props: Tuan2Bai1Props) {
	const result = Math.pow(props.A, 2) + Math.pow(props.B, 2);
	console.log(`Kết quả của a^2 + b^2 là ${result}`);

	return (
		<View style={styles.container}>
			{/* <Text style={styles.text}>Số A: {props.A}</Text>
			<Text style={styles.text}>Số B: {props.B}</Text>
			<Text style={styles.text}>Kết quả: {result}</Text> */}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 10,
		paddingTop: 10,
	},
	text: {
		textAlign: 'center',
	},
});
