import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Bai3() {
	return (
		<View style={styles.container}>
			<View style={styles.image} />
			<Text style={styles.text}>
				<Text style={{ ...styles.bullet }}>{'\u2B24'}</Text> Họ và tên:
				Vũ Quốc Bảo
				<br />
				<Text style={styles.bullet}>{'\u2B24'}</Text> Tuổi: 20
				<br />
				<Text style={styles.bullet}>{'\u2B24'}</Text> Nghề nghiệp: Sinh
				viên
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
