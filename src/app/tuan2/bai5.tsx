import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Tuan2Bai5() {
	return (
		<View style={styles.container}>
			<View style={[styles.traffic, backgroundColor.black]}>
				<View style={[styles.light, backgroundColor.red]}></View>
				<View style={[styles.light, backgroundColor.yellow]}></View>
				<View style={[styles.light, backgroundColor.green]}></View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		marginTop: 150,
	},
	traffic: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 160,
		height: 400,
		padding: 20,
		gap: 2,
	},
	light: {
		flex: 1,
		height: '100%',
		width: '100%',
		borderRadius: 100,
	},
});

const backgroundColor = StyleSheet.create({
	red: {
		backgroundColor: 'red',
	},
	yellow: {
		backgroundColor: 'yellow',
	},
	green: {
		backgroundColor: 'green',
	},
	black: {
		backgroundColor: 'black',
	},
});
