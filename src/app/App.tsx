import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Bai1 from './tuan1/bai1';
import Bai2 from './tuan1/bai2';
import Test from '../test';
import Bai3 from './tuan1/bai3';

export default function App() {
	return (
		// <View style={styles.container}>
		// 	<Link style={styles.spaceText} href='./test'>
		// 		Home
		// 	</Link>
		// 	<Link style={styles.spaceText} href='/tuan1/bai1'>
		// 		Tuần 1 Bài 1
		// 	</Link>
		// 	<Link style={styles.spaceText} href='/tuan1/bai2'>
		// 		Tuần 1 Bài 2
		// 	</Link>
		// </View>

		// <Bai1 />
		// <Bai2 />
		<Bai3 />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spaceText: {
		paddingTop: 30,
	},
});
