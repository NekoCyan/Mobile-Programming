import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

function mauNgauNhien() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return {
		color: `rgb(${red}, ${green}, ${blue})`,
		alpha: `rgba(${red}, ${green}, ${blue}, 0.5)`,
	};
}

export default function Tuan4Bai3_2() {
	const [color, setColor] = useState(mauNgauNhien());
	console.log(color);

	return (
		<View style={styles.container}>
			<Button title='Đổi màu' onPress={() => setColor(mauNgauNhien())} />
			<View
				style={[
					styles.circle,
					{ backgroundColor: color.alpha, borderColor: color.color },
				]}
			></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		gap: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
	circle: {
		width: 200,
		height: 200,
		borderRadius: 100,
		borderWidth: 5,
	},
});
