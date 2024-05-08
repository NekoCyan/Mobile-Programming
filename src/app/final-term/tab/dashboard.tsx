import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'native-base';
import React, { useState } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import ProductShower from '../../../component/productShower';
import { CAT_IMAGES, PRODUCTS } from '../../../utils/Constant';

const imageSources = [...CAT_IMAGES, ...CAT_IMAGES, ...CAT_IMAGES];

export default function Dashboard(props: any) {
	const [search, setSearch] = useState('');
	const [isSearchFocused, setIsSearchFocused] = React.useState(false);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.search}>
				<Ionicons name='search' size={25} color={'#1484f5'} />
				<TextInput
					placeholder='What are you looking for...'
					placeholderTextColor={'black'}
					style={styles.searchControl}
					onFocus={() => setIsSearchFocused(true)}
					onBlur={() => setIsSearchFocused(false)}
					value={search}
					onChangeText={(text) => setSearch(text)}
				/>
				{search.length > 0 && (
					<TouchableOpacity
						style={{
							position: 'absolute',
							right: 0,
							top: 0,
							paddingTop: 15,
							padding: 10,
						}}
						onPress={() => setSearch('')}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
							}}
						>
							X
						</Text>
					</TouchableOpacity>
				)}
			</View>
			{isSearchFocused || search.length > 0 ? (
				<ScrollView contentContainerStyle={styles.shower}>
					{(search.length > 0 ? PRODUCTS : [])
						.filter((x) =>
							x.name
								.toLowerCase()
								.includes(search.trim().toLowerCase()),
						)
						.map((data, index) => (
							<ProductShower
								key={data.id}
								props={props}
								data={data}
							/>
						))}
				</ScrollView>
			) : (
				<View>
					<View style={styles.shower}>
						<Text style={styles.showerText}>
							Image you might like!
						</Text>
						<ScrollView
							style={styles.showerScroll}
							horizontal={true}
							contentContainerStyle={{
								gap: 1,
								zIndex: 10,
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
						<Text style={styles.showerText}>
							Best from Meow Mix Food ~
						</Text>
						{PRODUCTS.filter(
							(x) =>
								x.categories.includes('Meow Mix') &&
								x.categories.includes('Food'),
						).map((data, index) => (
							<ProductShower
								key={data.id}
								props={props}
								data={data}
							/>
						))}
					</View>
					<View style={styles.shower}>
						<Text style={styles.showerText}>
							Good food that you can't miss!
						</Text>
						{PRODUCTS.filter(
							(x) => !x.categories.includes('Meow Mix'),
						).map((data, index) => (
							<ProductShower
								key={data.id}
								props={props}
								data={data}
							/>
						))}
					</View>
					<Text textAlign={'center'} fontSize={'2xl'} mb={5}>
						You catched all up ~
					</Text>
				</View>
			)}
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
		justifyContent: 'flex-start',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		margin: 10,
		width: '95%',
		position: 'relative',
	},
	searchControl: {
		width: '88%',
		paddingLeft: 5,
		fontSize: 18,
	},
	searchBox: {
		flex: 1,
		position: 'absolute',
		top: 50,
		left: 0,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		padding: 15,
		zIndex: 10,
	},
	shower: {
		gap: 10,
		padding: 10,
	},
	showerText: {
		fontWeight: 'bold',
		fontSize: 22,
		textTransform: 'uppercase',
	},
	showerScroll: {
		height: 250,
	},
	showerImage: {
		width: 250,
		height: 250,
	},
});
