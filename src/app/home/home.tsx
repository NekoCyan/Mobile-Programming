import { Button, StyleSheet, View } from 'react-native';

export default function Home(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Tuan 1'
				onPress={() => props.navigation.navigate('Tuan1')}
			/>
			<Button
				title='Tuan 2'
				onPress={() => props.navigation.navigate('Tuan2')}
			/>
			<Button
				title='Tuan 3'
				onPress={() => props.navigation.navigate('Tuan3')}
			/>
			<Button
				title='Tuan 4'
				onPress={() => props.navigation.navigate('Tuan4')}
			/>
			<Button
				title='Tuan 5'
				onPress={() => props.navigation.navigate('Tuan5')}
			/>
			<Button
				title='Tuan 6'
				onPress={() => props.navigation.navigate('Tuan6')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
});
