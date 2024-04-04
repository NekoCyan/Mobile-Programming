import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from './home/home';
import Tuan1 from './tuan1';
import Tuan1Bai1 from './tuan1/bai1';
import Tuan1Bai2 from './tuan1/bai2';
import Tuan1Bai3 from './tuan1/bai3';
import Tuan2 from './tuan2';
import Tuan2Bai1 from './tuan2/bai1';
import Tuan2Bai2 from './tuan2/bai2';
import Tuan2Bai3 from './tuan2/bai3';
import Tuan2Bai4 from './tuan2/bai4';
import Tuan2Bai5 from './tuan2/bai5';
import Tuan2Bai6 from './tuan2/bai6';
import Tuan2Bai7 from './tuan2/bai7';
import Tuan3 from './tuan3';
import Tuan3Bai2 from './tuan3/bai2';
import Tuan3Bai3 from './tuan3/bai3';
import Tuan3Bai4 from './tuan3/bai4';
import Tuan4 from './tuan4';
import Tuan4Bai1 from './tuan4/bai1';
import Tuan4Bai2 from './tuan4/bai2';
import Tuan4Bai3 from './tuan4/bai3';
import Tuan4Bai4 from './tuan4/bai4';
import Tuan5 from './tuan5';
import Tuan5Bai1 from './tuan5/bai1';
import Tuan5Bai2 from './tuan5/bai2';
import Tuan6 from './tuan6';
import ReduxTemperature from './tuan6/redux_nhietdo';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					{/* -- HOME -- */}
					<Stack.Screen
						name='Home'
						component={Home}
						options={options.Home}
					/>

					{/* -- TITLE -- */}
					<Stack.Screen
						name='Tuan1'
						component={Tuan1}
						options={options.Title}
					/>
					<Stack.Screen
						name='Tuan2'
						component={Tuan2}
						options={options.Title}
					/>
					<Stack.Screen
						name='Tuan3'
						component={Tuan3}
						options={options.Title}
					/>
					<Stack.Screen
						name='Tuan4'
						component={Tuan4}
						options={options.Title}
					/>
					<Stack.Screen
						name='Tuan5'
						component={Tuan5}
						options={options.Title}
					/>
					<Stack.Screen
						name='Tuan6'
						component={Tuan6}
						options={options.Title}
					/>

					{/* -- ASSIGNMENTS -- */}
					{/* -- ASSIGNMENTS TUAN 1 -- */}
					<Stack.Screen
						name='Tuan1Bai1'
						component={Tuan1Bai1}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan1Bai2'
						component={Tuan1Bai2}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan1Bai3'
						component={Tuan1Bai3}
						options={options.Assignment}
					/>
					{/* -- ASSIGNMENTS TUAN 2 -- */}
					<Stack.Screen
						name='Tuan2Bai1'
						component={Tuan2Bai1}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai2'
						component={Tuan2Bai2}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai3'
						component={Tuan2Bai3}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai4'
						component={Tuan2Bai4}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai5'
						component={Tuan2Bai5}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai6'
						component={Tuan2Bai6}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan2Bai7'
						component={Tuan2Bai7}
						options={options.Assignment}
					/>
					{/* -- ASSIGNMENTS TUAN 3 -- */}
					<Stack.Screen
						name='Tuan3Bai2'
						component={Tuan3Bai2}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan3Bai3'
						component={Tuan3Bai3}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan3Bai4'
						component={Tuan3Bai4}
						options={options.Assignment}
					/>
					{/* -- ASSIGNMENTS TUAN 4 -- */}
					<Stack.Screen
						name='Tuan4Bai1'
						component={Tuan4Bai1}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan4Bai2'
						component={Tuan4Bai2}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan4Bai3'
						component={Tuan4Bai3}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan4Bai4'
						component={Tuan4Bai4}
						options={options.Assignment}
					/>
					{/* -- ASSIGNMENTS TUAN 5 -- */}
					<Stack.Screen
						name='Tuan5Bai1'
						component={Tuan5Bai1}
						options={options.Assignment}
					/>
					<Stack.Screen
						name='Tuan5Bai2'
						component={Tuan5Bai2}
						options={options.Assignment}
					/>
					{/* -- ASSIGNMENTS TUAN 6 -- */}
					<Stack.Screen
						name='Tuan6Example1'
						component={ReduxTemperature}
						options={options.Assignment}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const options: { [key: string]: any } & { Home: any } & { Title: any } & {
	Assignment: any;
} = {
	Home: {
		headerStyle: {
			backgroundColor: 'orange',
		},
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerTintColor: 'white',
		headerTitleAlign: 'center',
	},
	Title: {
		headerStyle: {
			backgroundColor: 'gray',
		},
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerTintColor: 'white',
		headerTitleAlign: 'center',
	},
	Assignment: {
		headerStyle: {
			backgroundColor: 'white',
		},
		headerTitleStyle: {
			fontWeight: 'bold',
		},
		headerTintColor: 'black',
		headerTitleAlign: 'center',
	},
};
