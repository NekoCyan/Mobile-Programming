import React from 'react';
import { ColorValue, StyleSheet, Text, View } from 'react-native';

export default function Tuan4Bai2Component({
	colorName,
	colorize,
}: Readonly<{
	colorName: string;
	colorize: ColorValue;
}>) {
	return (
		<View style={{ ...styles.element, backgroundColor: colorize }}>
			<Text style={styles.text}>{colorName}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	element: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 50,
	},
});
