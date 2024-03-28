import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './tab/cart';
import Dashboard from './tab/dashboard';
import Profile from './tab/profile';
import Wishlist from './tab/wishlist';

const Tab = createBottomTabNavigator();

export default function IndexTab() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Dashboard'
				component={Dashboard}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Wishlist'
				component={Wishlist}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='heart' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Cart'
				component={Cart}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='cart' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='user' size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
