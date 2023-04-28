import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button, Icon} from '@rneui/themed';
import {DrawerActions, useRoute} from '@react-navigation/native';
import Main from '../../screens/Main/Main';
import Avatar from '../Avatar/Avatar';
// import PaymentScreen from '../../screens/Payment/PaymentScreen';
import {useDispatch, useSelector} from 'react-redux';
import {getHeaderTitle} from '@react-navigation/elements';
import Passengers from '../../screens/Passenger/Passengers';
import {DriverLogout} from '../../Api/Put';
import {logout} from '../../store/slice/slice';
// import AddNewCard from '../../screens/Payment/AddNewCard';
// import About from '../../screens/About/About';

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        display: 'flex',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <DrawerItemList {...props} drawerItemStyle={{color: 'white'}} />

      <View className="items-center justify-end h-3/5 mb-10">
        <Button
          title="Log out"
          color="#DC2626"
          buttonStyle={{
            borderWidth: 1,
            borderColor: '#BE123C',
            borderRadius: 6,
            height: 50,
          }}
          containerStyle={{width: '90%', textAlign: 'center'}}
          titleStyle={{
            color: '#FFF1F2',
            fontSize: 16,
            fontWeight: 500,
          }}
          style={{padding: 5}}
          onPress={() => {
            DriverLogout(state?.user?.user?.rider_id);
            dispatch(logout());
          }}
        />
      </View>

      <View className="items-start self-center">
        <Image
          style={{objectFit: 'contain', alignSelf: 'flex-start'}}
          className="w-[160px] h-20"
          source={require('./../../assets/logo2.png')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerItemStyle={{color: 'white'}}>
      <Drawer.Screen
        name="Welcome"
        options={{
          header: () => (
            <View className="w-full bg-black flex flex-row justify-between items-center p-2">
              <Button
                color="black"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                buttonStyle={{backgroundColor: 'black'}}
                style>
                <Icon name="menu" color="#fff" />
              </Button>
              <Image
                style={{width: 95, height: 50, objectFit: 'contain'}}
                source={require('./../../assets/logo3.png')}
              />
              <Avatar size={32} rounded title="Rd" backgroundColor="#059669" />
            </View>
          ),
          drawerLabelStyle: {
            color: 'white',
          },
        }}
        component={Main}
      />

      <Drawer.Screen
        name="Passengers"
        component={Passengers}
        options={{
          header: () => (
            <View className="w-full bg-black flex flex-row items-center p-2 shadow-lg shadow-gray-500/100">
              <Button
                color="black"
                onPress={() => navigation.navigate('Welcome')}
                style={{backgroundColor: 'lightBlue'}}>
                <Icon name="chevron-left" color="#fff" />
              </Button>
              <View className="self-center items-center justify-center w-[80%]">
                <Text className="font-bold text-lg">About us</Text>
              </View>
            </View>
          ),
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
}
