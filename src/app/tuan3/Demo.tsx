import { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';

export default function Demo() {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={isEnabled}
                style={{transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
