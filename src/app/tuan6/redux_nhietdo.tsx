import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { down, up } from '../../redux/child/temperature';
import { RootDispatch, RootState } from '../../redux/store';

export default function ReduxTemperature() {
	const value = useSelector<RootState, number>(
		(state) => state.temperature.value,
	);
	const dispatch: RootDispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Nhiệt độ: {value}°C</Text>
			<Button title='Tăng' onPress={() => dispatch(up())} />
			<Button title='Giảm' onPress={() => dispatch(down())} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 5,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
});
