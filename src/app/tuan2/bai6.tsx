import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Tuan2Bai6() {
	const row = [1, 2, 3, 4];
	const data = [
		// this is used for anti format.
		7,
		8,
		9,
		'/',
		4,
		5,
		6,
		'*',
		1,
		2,
		3,
		'-',
		0,
		'.',
		'=',
		'+',
	];

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Máy Tính</Text>
			<View style={{ flexDirection: 'row' }}>
				<TextInput style={styles.textinput} />
				<Text style={styles.button}>C</Text>
			</View>
			{row.map((rowNumber, index) => {
				return (
					<View key={index} style={{ flexDirection: 'row' }}>
						{data.map((item, index2) => {
							if (
								index2 < rowNumber * 4 &&
								index2 >= (rowNumber - 1) * 4
							) {
								return (
									<Text key={index2} style={styles.button}>{item}</Text>
								);
							}
						})}
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 120,
		borderColor: 'gray',
		borderWidth: 1,
		width: 'auto',
		margin: 'auto',
		borderRadius: 20,
	},
	header: {
		textAlign: 'center',
	},
	textinput: {
		marginLeft: 5,
		marginTop: 5,
		width: 119,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
	},
	button: {
		padding: 10,
		borderRadius: 100,
		borderColor: 'gray',
		borderWidth: 1,
		margin: 5,
	},
});
