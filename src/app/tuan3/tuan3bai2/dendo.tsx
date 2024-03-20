import { StyleSheet, View } from 'react-native';

export default function DenDo() {
	return <View style={[styles.light, backgroundColor.red]}></View>;
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
	red: {
		backgroundColor: 'red',
	},
});
