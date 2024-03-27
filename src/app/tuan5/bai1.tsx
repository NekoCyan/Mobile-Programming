import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Tuan5Bai1() {
	const [arr, setArr] = useState([] as number[]);
	console.log('arr', arr);

	return (
		<View style={styles.container}>
			<Button
				title='Thêm số'
				onPress={() => setArr([...arr, randomNumber(0, 100)])}
			/>
			<Button
				title='Xóa'
				onPress={() => setArr(arr.slice(0, arr.length - 1))}
			/>

			<FlatList
				data={arr}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={{ marginBottom: 5 }}>
						<Text style={styles.text}>{item}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	text: {
		width: 200,
		height: 30,
		fontSize: 20,
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
	},
});
