import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import AlertModal from '../../component/modal/AlertModal';
import { MultiStyles } from '../../utils/ComponentUtils';

export default function Auth(props: any) {
	const [auth, setAuth] = useState({ username: '', password: '' });
	const [showPassword, setShowPassword] = useState(false);
	const [isSigning, setIsSigning] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		if (!isSigning) return;

		setTimeout(() => {
			props.navigation.replace('IndexTab');
			setIsSigning(false);
		}, 1000);
	}, [isSigning]);

	return (
		<ImageBackground
			style={styles.background}
			source={require('../../assets/BG_Login.jpg')}
		>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require('../../assets/logo.png')}
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
						secureTextEntry={!showPassword}
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
						style={MultiStyles(
							styles.button,
							isSigning && styles.signing,
						)}
						onPress={async () => {
							setIsSigning(true);
						}}
						disabled={isSigning}
					>
						{isSigning ? 'Login...' : 'Login'}
					</Text>
				</TouchableOpacity>
			</View>
			{!!error && (
				<AlertModal
					onClose={() => setError('')}
					title={'Error'}
					description={error}
				/>
			)}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		gap: 20,
		paddingTop: 100,
		height: '100%',
	},
	logo: {
		width: 300,
		height: 150,
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
	signing: {
		opacity: 0.5,
		pointerEvents: 'none',
	},
});
