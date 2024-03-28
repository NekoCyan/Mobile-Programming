import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

export default function Auth(props: any) {
	const [auth, setAuth] = useState({ username: '', password: '' });
	const [showPassword, setShowPassword] = useState(false);

	return (
		<ImageBackground
			style={styles.container}
			source={require('../../assets/BG_Login.jpg')}
		>
			<Image
				style={styles.logo}
				source={require('../../assets/DNTU_Logo.png')}
			/>
			<View style={styles.groupInput}>
				<TextInput
					placeholder='Username here...'
					placeholderTextColor={'black'}
					style={[styles.control, styles.label]}
					onChangeText={(e) => setAuth({ ...auth, username: e })}
					value={auth.username}
				/>
			</View>
			<View style={styles.groupInput}>
				<TextInput
					placeholder='Password here...'
					placeholderTextColor={'black'}
					secureTextEntry={!showPassword ? true : false}
					style={[styles.control, styles.label]}
					onChangeText={(e) => setAuth({ ...auth, password: e })}
					value={auth.password}
				/>
				<MaterialCommunityIcons
					name={showPassword ? 'eye-off' : 'eye'}
					size={24}
					color='rgba(255, 0, 0, 0.6)'
					style={styles.showPasswordIcon}
					onPress={() => setShowPassword(!showPassword)}
					aria-label='Show Password'
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.link}>Forget Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text
					style={styles.button}
					onPress={() => props.navigation.replace('IndexTab')}
				>
					Login
				</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	logo: {
		width: 150,
		height: 300,
	},
	groupInput: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	label: {
		color: 'black',
		textShadowColor: 'rgba(255, 0, 0, 0.8)',
		textShadowRadius: 10,
		fontSize: 20,
	},
	control: {
		borderColor: 'transparent',
		borderBottomColor: 'rgba(255, 0, 0, 1)',
		borderWidth: 2,
		padding: 10,
		width: 300,
		fontSize: 20,
	},
	showPasswordIcon: {
		marginLeft: -37,
	},
	link: {
		textAlign: 'right',
		fontSize: 20,
	},
	button: {
		textAlign: 'center',
		color: 'white',
		backgroundColor: '#1484f5',
		padding: 5,
		width: 200,
		borderRadius: 10,
		fontSize: 30,
	},
});
