import { Button, StyleSheet, View } from 'react-native';

export default function Tuan6(props: any) {
	return (
		<View style={styles.container}>
			<Button
				title='Example 1'
				onPress={() => props.navigation.navigate('Tuan6Example1')}
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
