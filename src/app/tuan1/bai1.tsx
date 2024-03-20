import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let students = [
	{
		id: '1721030861',
		fullName: 'Vũ Quốc Bảo',
		dob: new Date(2003, 10, 26),
		class: '21DTH3',
	},
	{
		id: '1721030593',
		fullName: 'Nguyễn Thanh Hải',
		dob: new Date(2002, 9, 14),
		class: '21DTH3',
	},
];

export default function Tuan1Bai1() {
	return (
		<View style={styles.container}>
			{students.map((x) => {
				const dobFormat = `${x.dob.getDate()}/${
					x.dob.getMonth() + 1
				}/${x.dob.getFullYear()}`;
				return (
					<View style={styles.element} key={x.id}>
						<Text style={styles.text1}>
							Họ và tên: {x.fullName}
						</Text>
						<Text style={styles.text2}>MSSV: {x.id}</Text>
						<Text style={styles.text3}>Ngày sinh: {dobFormat}</Text>
						<Text style={styles.text4}>Lớp: {x.class}</Text>
					</View>
				);
			})}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	element: {
		paddingBottom: 50,
		// flex: 1,
		// justifyContent: 'center',
	},
	text1: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text2: {
		fontSize: 20,
		color: 'red',
		textAlign: 'left',
	},
	text3: {
		fontSize: 20,
		color: 'purple',
		textAlign: 'left',
		fontStyle: 'italic',
	},
	text4: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'blue',
		textAlign: 'right',
	},
});
