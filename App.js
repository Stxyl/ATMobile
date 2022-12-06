import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import screens
import Map from './screens/Map.js';
import Departures from './screens/Departures.js';
import ATCard from './screens/ATCard.js';
import Account from './screens/Account.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Map') {
                    iconName = focused
                        ? 'map'
                        : 'map-outline';
                } else if (route.name === 'Departures') {
                    iconName = focused
                        ? 'ios-list'
                        : 'ios-list-outline';
                } else if (route.name === 'ATHop Card') {
                    iconName = focused
                        ? 'card'
                        : 'card-outline';
                } else if (route.name === 'Account') {
                    iconName = focused
                        ? 'person'
                        : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'dodgerblue',
            tabBarInactiveTintColor: 'gray',
        }
        )}>

          {
            // Add your screens here
          }
            <Tab.Screen options={{ headerShown: false}} component={Map} name={"Map"} />
            <Tab.Screen options={{ headerShown: false}} name={"Departures"} component={Departures} />
            <Tab.Screen options={{ headerShown: false}} name={"ATHop Card"} component={ATCard} />
            <Tab.Screen options={{ headerShown: false}} name={"Account"} component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

