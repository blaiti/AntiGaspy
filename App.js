import React from 'react';

// Bottom Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import * as theme  from './src/assets/theme';

// scrrens 
import Home from './src/screens/home/home';
import Offers from './src/screens/offers/offers';
import Saved from './src/screens/saved/saved';
import Settings from './src/screens/settings/settings';

// Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  const colors = theme.light;
  const font = theme.font;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: true,
        labelStyle:{fontFamily: font},
        activeBackgroundColor: colors.lightbg,
        inactiveBackgroundColor: colors.lightbg,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarLabel: 'Offres',
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" color={color} size={25} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Enregistrés',
          tabBarIcon: ({ color }) => (
            <Icon name="bookmark" color={color} size={25} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={25} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// App Stack 
import SingleOffer from './src/screens/offers/single-offer';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} />
      <Stack.Screen options={{headerShown: false}} name="SingleOffer" component={SingleOffer} />
    </Stack.Navigator>
  )
}

// Main App
import { NavigationContainer } from '@react-navigation/native';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  return (
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
  );
};

export default App;