import { Button, StyleSheet, View } from 'react-native';

export default function Tuan4(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Bài 1'
				onPress={() => props.navigation.navigate('Tuan4Bai1')}
			/>
			<Button
				title='Bài 2'
				onPress={() => props.navigation.navigate('Tuan4Bai2')}
			/>
			<Button
				title='Bài 3'
				onPress={() => props.navigation.navigate('Tuan4Bai3')}
			/>
			<Button
				title='Bài 4'
				onPress={() => props.navigation.navigate('Tuan4Bai4')}
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
