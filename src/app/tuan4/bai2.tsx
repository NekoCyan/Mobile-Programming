import { StyleSheet, View } from 'react-native';
import Tuan4Bai2Component from './components/bai2_component';

export default function Tuan4Bai1() {
	return (
		<View style={styles.container}>
			<Tuan4Bai2Component colorName='Đỏ' colorize='red' />
			<Tuan4Bai2Component colorName='Cam' colorize='orange' />
			<Tuan4Bai2Component colorName='Vàng' colorize='yellow' />
			<Tuan4Bai2Component colorName='Lục' colorize='green' />
			<Tuan4Bai2Component colorName='Lam' colorize='blue' />
			<Tuan4Bai2Component colorName='Chàm' colorize='indigo' />
			<Tuan4Bai2Component colorName='Tím' colorize='purple' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
