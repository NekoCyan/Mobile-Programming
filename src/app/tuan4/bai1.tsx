import { StyleSheet, View } from 'react-native';
import Tuan4Bai1Component from './components/bai1_component';

export default function Tuan4Bai1() {
	return (
		<View style={styles.container}>
			<Tuan4Bai1Component
				title='Status'
				likes={'Số' as unknown as number}
				loves={'Số' as unknown as number}
			/>
			<Tuan4Bai1Component
				title='Hôm nay trời đệp quá'
				likes={12345}
				loves={54321}
			/>
			<Tuan4Bai1Component
				title='Hihi'
				likes={1}
				loves={0}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
});
