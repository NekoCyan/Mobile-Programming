import { useState } from 'react';
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

export default function Tuan5Bai2() {
	const [input, setInput] = useState('' as string);
	const [food, setFood] = useState([] as string[]);

	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<TextInput
					style={styles.textInput}
					placeholder='Nhập món ăn'
					onChangeText={(text) => setInput(text)}
					value={input}
				/>
				<Button
					title='+'
					onPress={() => {
						setFood([...food, input].filter((x) => x));
						setInput('');
					}}
				/>
			</View>

			<FlatList
				data={food}
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
		marginTop: 10,
	},
	input: {
		display: 'flex',
		flexDirection: 'row',
		gap: 5,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		width: 200,
		height: 40,
		fontSize: 20,
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1,
	},
	text: {
		fontSize: 25,
	},
});
