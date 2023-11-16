import { NavigationContainer } from '@react-navigation/native';
import { Landing } from './screens/Landing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: '#AB8D5A',
          tabBarActiveBackgroundColor: '#4B6B56',
          tabBarInactiveBackgroundColor: '#2C5A4A',
          tabBarStyle:{borderTopWidth: 0}
        }}>
        <Tab.Screen name='Home' component={Landing} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

