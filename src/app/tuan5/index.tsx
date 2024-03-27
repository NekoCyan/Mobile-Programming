import { Button, StyleSheet, View } from 'react-native';

export default function Tuan5(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Bài 1'
				onPress={() => props.navigation.navigate('Tuan5Bai1')}
			/>
			<Button
				title='Bài 2'
				onPress={() => props.navigation.navigate('Tuan5Bai2')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
});
