import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AddToWishlistButton from '../component/product/AddToWishlist';
import store, { RootDispatch, RootState } from '../redux/store';
import { WishlistAction, WishlistState } from '../redux/wishlist/WishlistSlice';
import Auth from './final-term/auth';
import IndexTab from './final-term/indexTab';
import Buy from './final-term/tab/buy';
import Thanks from './final-term/tab/thanks';

const Stack = createStackNavigator();

export default function App() {
	const [isFavorited, setIsFavorited] = useState(false);

	useEffect(() => {
		LogBox.ignoreLogs([
			'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
		]);
	}, []);

	return (
		<Provider store={store}>
			<NativeBaseProvider isSSR={false}>
				<NavigationContainer>
					<Stack.Navigator>
						{/* -- Main Page -- */}
						<Stack.Screen
							name='Auth'
							component={Auth}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='IndexTab'
							component={IndexTab}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Buy'
							component={Buy}
							options={({ route }) => ({
								headerBackTitle: 'Back',
								title: 'Buying',
								headerRight() {
									const wishlist = useSelector<
										RootState,
										WishlistState['value']
									>((state) => state.wishlist.value);
									const dispatch =
										useDispatch<RootDispatch>();

									return (
										<AddToWishlistButton
											isFavorited={wishlist.includes(
												parseInt(route.params['id']),
											)}
											onPress={() => {
												dispatch(
													WishlistAction.toggle(
														parseInt(
															route.params['id'],
														),
													),
												);
											}}
										/>
									);
								},
							})}
						/>
						<Stack.Screen
							name='Thanks'
							component={Thanks}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</NativeBaseProvider>
		</Provider>
	);
}
