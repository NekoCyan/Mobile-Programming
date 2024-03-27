import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tuan2Bai2() {
	const InSoLe = () => {
		const instance = new Array(51).fill(0).map((_, index) => {
			return 50 + index;
		});

		let count = 0;
		for (let i = 0; i < instance.length; i++) {
			if (instance[i] & 1) {
				count++;
				console.log(instance[i]);
			}
		}

		return count;
	};

	console.log(`Số số lẻ trong khoảng 50 đến 100 là ${InSoLe()}`);

	return (
		<View>
			<Text style={{ fontSize: 20, marginLeft: 5 }}>Check Console</Text>
		</View>
	);
}
const styles = StyleSheet.create({});
