import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// ============= Import all the Navigation module =================
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ============= Import all the components =================
import HomeScreen from './src/pages/HomeScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import Home from './src/pages/Home';
import NewLeave from './src/pages/Leaves';
import CustomButton from './src/components/AppButton';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewLeave"
          component={NewLeave}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Tab.Screen name='NewLeave' component={NewLeave} options={{ headerShown: false }} />
        <Tab.Screen name='DateCalculator' component={DateCalculator} options={{ headerShown: false }} />
      </Tab.Navigator> */}

    </NavigationContainer>
  );
}

export default App;