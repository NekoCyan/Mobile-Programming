import { View } from 'native-base';
import { StyleSheet } from 'react-native';

export interface HrProps {
	/**
	 * width
	 */
	w?: number;
}

export default function Hr({ w }: Readonly<HrProps>) {
	return (
		<View
			style={{
				borderBottomColor: 'black',
				borderBottomWidth: w || StyleSheet.hairlineWidth,
			}}
		/>
	);
}
