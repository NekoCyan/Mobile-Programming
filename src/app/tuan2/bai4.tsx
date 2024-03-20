import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tuan2Bai4() {
	return (
		<View style={styles.container}>
			<View style={{ ...styles.element, ...backgroundColor.red }}>
				<Text style={styles.text}>Đỏ</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.orange }}>
				<Text style={styles.text}>Cam</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.yellow }}>
				<Text style={styles.text}>Vàng</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.green }}>
				<Text style={styles.text}>Lục</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.blue }}>
				<Text style={styles.text}>Lam</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.indigo }}>
				<Text style={styles.text}>Chàm</Text>
			</View>
			<View style={{ ...styles.element, ...backgroundColor.purple }}>
				<Text style={styles.text}>Tím</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
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

const backgroundColor = StyleSheet.create({
	red: {
		backgroundColor: 'red',
	},
	orange: {
		backgroundColor: 'orange',
	},
	yellow: {
		backgroundColor: 'yellow',
	},
	green: {
		backgroundColor: 'green',
	},
	blue: {
		backgroundColor: 'blue',
	},
	indigo: {
		backgroundColor: 'indigo',
	},
	purple: {
		backgroundColor: 'purple',
	},
});
