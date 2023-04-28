import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartSC from './screens/StartScreen/StartSC';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './screens/Signup/Signup';
import Login from './screens/Login/Login';
import VehicleDetails from './screens/Signup/VehicleDetails';
import MyDrawer from './utils/Drawer/Drawer';
import BookSuccess from './screens/misc/BookSuccess';
import {enableLatestRenderer} from 'react-native-maps';
import '../ignoreWarnings';
import {Provider, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import store from './store';

const App = () => {
  enableLatestRenderer();

  const Stack = createNativeStackNavigator();
  const state = useSelector(state => state);

  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            {!state?.user?.user?.token ? (
              <>
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
                  name="login"
                  component={Login}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="vehicleDetails"
                  component={VehicleDetails}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="drawerScreens"
                  component={MyDrawer}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="bookSuccess"
                  component={BookSuccess}
                />
              </>
            )}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
