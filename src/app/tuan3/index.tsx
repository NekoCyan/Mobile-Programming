import { Button, StyleSheet, View } from 'react-native';

export default function Tuan3(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Bài 2'
				onPress={() => props.navigation.navigate('Tuan3Bai2')}
			/>
			<Button
				title='Bài 3'
				onPress={() => props.navigation.navigate('Tuan3Bai3')}
			/>
			<Button
				title='Bài 4'
				onPress={() => props.navigation.navigate('Tuan3Bai4')}
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
