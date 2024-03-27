import { Button, StyleSheet, View } from 'react-native';

export default function Tuan2(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Bài 1'
				onPress={() => props.navigation.navigate('Tuan2Bai1')}
			/>
			<Button
				title='Bài 2'
				onPress={() => props.navigation.navigate('Tuan2Bai2')}
			/>
			<Button
				title='Bài 3'
				onPress={() => props.navigation.navigate('Tuan2Bai3')}
			/>
			<Button
				title='Bài 4'
				onPress={() => props.navigation.navigate('Tuan2Bai4')}
			/>
			<Button
				title='Bài 5'
				onPress={() => props.navigation.navigate('Tuan2Bai5')}
			/>
			<Button
				title='Bài 6'
				onPress={() => props.navigation.navigate('Tuan2Bai6')}
			/>
			<Button
				title='Bài 7'
				onPress={() => props.navigation.navigate('Tuan2Bai7')}
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
