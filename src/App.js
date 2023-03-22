import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartSC from './screens/StartScreen/StartSC';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './screens/Signup/Signup';
import Login from './screens/Login/Login';
import VehicleDetails from './screens/Signup/VehicleDetails';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="startScreen"
            component={StartSC}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="signup"
            component={Signup}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="vehicleDetails"
            component={VehicleDetails}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
