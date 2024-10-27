import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens from separate files
import DashboardScreen from './DashboardScreen';
import SearchScreen from './SearchScreen';
import AiScanScreen from './AiScanScreen';
import ExpensesScreen from './ExpensesScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'AI Scan') {
              iconName = 'camera-alt';
            } else if (route.name === 'Expenses') {
              iconName = 'account-balance-wallet';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="AI Scan" component={AiScanScreen} />
        <Tab.Screen name="Expenses" component={ExpensesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
