import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tuan4Bai3_1 from './bai3_1';
import Tuan4Bai3_2 from './bai3_2';

export default function Tuan4Bai3() {
	return (
		<View style={styles.container}>
            <Tuan4Bai3_1 />
            <Tuan4Bai3_2 />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 50,
    }
});
