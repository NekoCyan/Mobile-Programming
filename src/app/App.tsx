import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tuan3Bai3 from './tuan3/bai3';

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
		// <Bai3 />
		// <_TextInput />
		// <_Modal />
		// <Demo />
		<View style={{ gap: 20 }}>
			{/* <Status title='Hello' description='World' />
			<Status
				title='Hôm nay trời đệp quá'
				description='12345 likes - 54321 hearts'
			/>
			<Status
				title='Quang ơi'
				description='Quang đẹp trai quá'
			/> */}
			{/* <Tempurature /> */}
			{/* <Tuan2Bai1 A={2} B={3}/> */}
			<Tuan3Bai3 />
		</View>
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
