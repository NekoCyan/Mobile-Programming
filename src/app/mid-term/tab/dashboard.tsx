import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import ProductShower from '../component/productShower';

const Tab = createBottomTabNavigator();

const imageSources = [
	require('../../../assets/Cat_Hehe_1.jpeg'),
	require('../../../assets/Cat_Hehe_2.jpeg'),
	require('../../../assets/Cat_Hehe_3.jpeg'),
	require('../../../assets/Cat_Hehe_2.jpeg'),
	require('../../../assets/Cat_Hehe_1.jpeg'),
	require('../../../assets/Cat_Hehe_1.jpeg'),
	require('../../../assets/Cat_Hehe_2.jpeg'),
	require('../../../assets/Cat_Hehe_3.jpeg'),
	require('../../../assets/Cat_Hehe_2.jpeg'),
	require('../../../assets/Cat_Hehe_1.jpeg'),
];

export default function Dashboard(props: any) {
	// const [search, setSearch] = useState('');
	const [isSearchFocused, setIsSearchFocused] = React.useState(false);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.search}>
				<Ionicons
					style={{
						marginLeft: 10,
					}}
					name='search'
					size={32}
					color={'#1484f5'}
				/>
				<TextInput
					placeholder='What are you looking for...'
					placeholderTextColor={'black'}
					style={styles.searchControl}
					onFocus={() => setIsSearchFocused(true)}
				/>
			</View>
			<View style={styles.shower}>
				<Text style={styles.showerText}>IMAGES YOU MIGHT LIKE!</Text>
				<ScrollView
					style={styles.showerScroll}
					horizontal={true}
					contentContainerStyle={{
						gap: 1,
					}}
				>
					{imageSources.map((source, index) => (
						<Image
							key={index}
							style={styles.showerImage}
							source={source}
						/>
					))}
				</ScrollView>
			</View>
			<View style={styles.shower}>
				<Text style={styles.showerText}>BEST PRODUCTS FOR YOUR CAT~</Text>
				{Array.from({ length: 5 }).map((_, index) => (
					<ProductShower key={index} props={props} />
				))}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	},
	search: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		margin: 10,
		width: '95%',
	},
	searchControl: {
		width: '100%',
		paddingLeft: 10,
		fontSize: 18,
	},
	shower: {
		gap: 10,
		padding: 10,
	},
	showerText: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	showerScroll: {
		height: 250,
	},
	showerImage: {
		width: 250,
		height: 250,
	},
});
