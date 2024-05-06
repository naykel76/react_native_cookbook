import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import CounterScreen from './src/screens/CounterScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const CategoriesStackNav = () => (
        <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={CounterScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
    );

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Counter" component={CounterScreen} />
                    <Tab.Screen name="Home" component={CategoriesStackNav} options={{ tabBarLabel: 'Categories' }}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}