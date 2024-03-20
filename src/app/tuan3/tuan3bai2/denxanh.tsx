import { StyleSheet, View } from 'react-native';

export default function DenXanh() {
	return <View style={[styles.light, backgroundColor.green]}></View>;
}
const styles = StyleSheet.create({
	light: {
		flex: 1,
		height: '100%',
		width: '100%',
		borderRadius: 100,
	},
});

const backgroundColor = StyleSheet.create({
	green: {
		backgroundColor: 'green',
	},
});
