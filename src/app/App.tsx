import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Auth from './final-term/auth';
import IndexTab from './final-term/indexTab';
import Buy from './final-term/tab/buy';
import Thanks from './final-term/tab/thanks';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
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
							options={{
								headerBackTitle: 'Dashboard',
								title: 'Buying',
							}}
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
