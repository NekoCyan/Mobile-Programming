import { StyleSheet, View } from 'react-native';

export default function DenVang() {
	return <View style={[styles.light, backgroundColor.yellow]}></View>;
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
	yellow: {
		backgroundColor: 'yellow',
	},
});
