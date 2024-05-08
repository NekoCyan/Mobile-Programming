import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'native-base';
import { Fragment, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Hr from '../../../component/hr';
import ConfirmModal from '../../../component/modal/ConfirmModal';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/user/UserSlice';

export default function Profile(props: any) {
	const user = useSelector<RootState, UserState>((state) => state.user);
	const [isLogout, setIsLogout] = useState(false);

	useEffect(() => {
		if (!isLogout || !!user.username) return;

		props.navigation.replace('Auth');
		setIsLogout(false);
	}, [isLogout]);

	return (
		<Fragment>
			<View
				style={{
					flex: 1,
				}}
				justifyContent={'space-around'}
				alignItems={'center'}
			>
				<View>
					<Image
						w={300}
						h={150}
						mt={10}
						source={require('../../../assets/logo.png')}
						alt='logo'
					/>
					<Text
						textAlign={'center'}
						numberOfLines={2}
						fontSize={'2xl'}
						mx={2}
					>
						{user.username
							? `Welcome, ${user.username}!`
							: 'Welcome, Guest!'}
					</Text>
				</View>
				<View style={styles.container}>
					<Hr />
					<TouchableOpacity
						style={styles.component}
						onPress={() => setIsLogout(true)}
					>
						<Text style={styles.text}>
							{user.username ? 'Logout' : 'Login'}
						</Text>
						<Ionicons
							name='log-out-outline'
							size={25}
							color='black'
						/>
					</TouchableOpacity>
					<Hr />
				</View>
			</View>
			{isLogout && !!user.username && (
				<ConfirmModal
					description='Are you sure to logout?'
					onCancel={() => setIsLogout(false)}
					onConfirm={() => {
						props.navigation.replace('Auth');
						setIsLogout(false);
					}}
				/>
			)}
		</Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 0,
	},
	component: {
		padding: 5,
		paddingLeft: 70,
		paddingRight: 70,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	text: {
		fontSize: 20,
	},
});
