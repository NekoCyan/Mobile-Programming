import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const data = [
	{ id: 1, ten: 'Sách Toán', loai: 'Sách' },
	{ id: 2, ten: 'Sách Văn', loai: 'Sách' },
	{ id: 3, ten: 'Conan', loai: 'Truyện' },
	{ id: 4, ten: 'Sherlock Holmes', loai: 'Tiểu Thuyết' },
	{ id: 5, ten: 'Doraemon', loai: 'Truyện' },
];

export default function Tuan2Bai3() {
	console.log(
		`Lọc các loại Sách`,
		data.filter((item) => item.loai === 'Sách'),
	);
	console.log(
		`Tìm Sách có id 3`,
		data.find((item) => item.id === 3),
	);
	console.log(
		`Dùng some() để kiểm tra có loại Tiểu Thuyết trong mảng không`,
		data.some((item) => item.loai === 'Tiểu Thuyết'),
	);

	return (
		<View>
			<Text style={{ fontSize: 20, marginLeft: 5 }}>Check Console</Text>
		</View>
	);
}
const styles = StyleSheet.create({});
