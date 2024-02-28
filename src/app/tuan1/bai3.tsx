import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Bai3() {
	return (
		<View style={styles.container}>
			<View style={styles.image} />
			<View>
				{newText('Họ và tên: Vũ Quốc Bảo')}
				{newText('Tuổi: 20')}
				{newText('Nghề nghiệp: Sinh viên')}
			</View>
		</View>
	);
}
function newText(text: string) {
	return (
		<Text style={styles.text}>
			<Text style={styles.bullet}>{'\u2B24'}</Text> {text}
		</Text>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
	image: {
		width: 150,
		height: 150,
		backgroundColor: 'gray',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
	},
	bullet: {
		color: 'red',
	},
});
