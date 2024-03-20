import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Tuan2Bai7() {
	const number = [10, 9, 9]
    const keyboard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"
        , "A", "S", "D", "F", "G", "H", "J", "K", "L"
        , "?123", "Z", "X", "C", "V", "B", "N", "M", "."]
    let count = 0

	return (
		<View style={styles.container}>
			{number.map((itemchiso) => {
				count += itemchiso;
				return (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
						}}
					>
						{keyboard.map((item, index) => {
							if (index < count && index >= count - itemchiso) {
								return (
									<View
										style={{
											...styles.keyboard,
											...((index == 19 ||
												index == 27) && {
												backgroundColor: '#CACCD3',
											}),
										}}
									>
										{item}
									</View>
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
