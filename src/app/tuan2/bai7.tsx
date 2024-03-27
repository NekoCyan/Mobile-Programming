import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tuan2Bai7() {
	const number = [10, 9, 9]
    const keyboard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"
        , "A", "S", "D", "F", "G", "H", "J", "K", "L"
        , "?123", "Z", "X", "C", "V", "B", "N", "M", "."]
    let count = 0

	return (
		<View style={styles.container}>
			{number.map((itemchiso, index1) => { // Added "key" prop to the outer map
				count += itemchiso;
				return (
					<View
						key={index1} // Added "key" prop to the outer View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
						}}
					>
						{keyboard.map((item, index2) => { // Added "key" prop to the inner map
							if (index2 < count && index2 >= count - itemchiso) {
								return (
									<Text
										key={index2} // Added "key" prop to the inner View
										style={{
											...styles.keyboard,
											...((index2 === 19 || // Replaced '==' with '==='
												index2 === 27) && { // Replaced '==' with '==='
												backgroundColor: '#CACCD3',
											}),
										}}
									>
										{item}
									</Text>
								);
							}
							return null; // Added return statement for the else case
						})}
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E8EAED',
	},
	keyboard: {
		backgroundColor: '#FFFFFF',
		padding: 10,
		margin: 5,
		borderRadius: 5,
		fontWeight: '500',
	},
});
