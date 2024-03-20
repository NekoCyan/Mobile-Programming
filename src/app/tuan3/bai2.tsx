import React from 'react';
import { StyleSheet, View } from 'react-native';
import DenDo from './tuan3bai2/dendo';
import DenVang from './tuan3bai2/denvang';
import DenXanh from './tuan3bai2/denxanh';

export default function Tuan3Bai2() {
	return (
		<View style={styles.container}>
			<View style={[styles.traffic, backgroundColor.black]}>
				<DenDo />
				<DenVang />
				<DenXanh />
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
});

const backgroundColor = StyleSheet.create({
	black: {
		backgroundColor: 'black',
	},
});
