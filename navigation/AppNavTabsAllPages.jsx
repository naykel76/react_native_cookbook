import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CartScreen from './src/screens/CartScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CategoryStackNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
        </Stack.Navigator>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'HomeTab') {
                    iconName = 'home-outline';
                } else if (route.name === 'Cart') {
                    iconName = 'cart-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            headerShown: false
        })}
        >
            <Tab.Screen name="HomeTab" component={CategoryStackNav} options={{ title: 'Home' }} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

function SettingsTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'SettingsTab') {
                    iconName = 'settings-outline';
                } else if (route.name === 'Cart') {
                    iconName = 'cart-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            headerShown: false
        })}
        >
            <Tab.Screen name="SettingsTab" component={SettingsScreen} options={{ title: 'Settings' }} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

function ProfileTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'ProfileTab') {
                    iconName = 'person-outline';
                } else if (route.name === 'Cart') {
                    iconName = 'cart-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            headerShown: false
        })}
        >
            <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'Profile' }} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeTabs} />
                <Drawer.Screen name="Settings" component={SettingsTabs} />
                <Drawer.Screen name="Profile" component={ProfileTabs} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}