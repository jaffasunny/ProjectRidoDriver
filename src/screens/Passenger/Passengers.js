import {View, Text, Image, Linking, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {DriverActiveTrip} from '../../Api/Get';
import {AddDriverTripDetails} from '../../store/slice/slice';
import {EndRide} from '../../Api/Put';

const Passengers = ({navigation}) => {
  const [button, setButton] = useState('pickup');
  const [stopInterval, setStopInterval] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const openMapWithDirections = (originLat, originLng, destLat, destLng) => {
    const origin = `${originLat},${originLng}`;
    const destination = `${destLat},${destLng}`;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;

    Linking.openURL(url);
  };

  useEffect(() => {
    let interval = setInterval(async () => {
      let activeTrips = await DriverActiveTrip(state?.user?.user?.driver_id);
      console.log('activeTrips', activeTrips);
      if (activeTrips !== null) {
        dispatch(AddDriverTripDetails(activeTrips?.data));
        setStopInterval(true);
      }
    }, 3000);

    () => clearInterval(interval);
  }, []);

  console.log('state.user.driverTrips', state);
  // if (state.user.driverTrips) {
  //   state?.user?.driverTrips.map(trips => console.log(trips));
  // }

  return (
    <View className="bg-black h-full items-center">
      <View className="w-[90%] flex-row justify-end items-center">
        <Text className="text-white text-lg">Est Fare</Text>
        <Text className="text-[#A5B4FC] font-bold text-2xl ml-3">
          {/* Rs {state?.user?.driverTrips[0]?.fare_amount} */}
        </Text>
      </View>

      <View className="items-start w-[90%]">
        <Text className="text-white text-2xl font-bold">Passenger</Text>

        <View
          style={{
            borderLeftWidth: 10,
            borderColor: '#4F46E5',
            marginTop: 13,
            width: '100%',
          }}>
          {state?.user?.driverTrips !== null
            ? state?.user?.driverTrips?.map(trip => (
                <View
                  className="bg-[#161616] w-full h-[139] rounded-lg items-center py-3"
                  key={trip?.id}>
                  <View className="flex-row items-start justify-between w-[90%]">
                    <Text className="text-white font-medium text-base">
                      {trip?.name}
                    </Text>

                    <Button
                      title="Call"
                      color="#4F46E5"
                      buttonStyle={{
                        borderRadius: 6,
                        width: 72,
                        height: 31,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      titleStyle={{
                        color: '#FAFAFA',
                        fontSize: 10,
                      }}
                      onPress={() =>
                        Linking.openURL(`tel:${trip?.phone_number}`)
                      }>
                      <Image
                        style={{width: 15, objectFit: 'contain'}}
                        source={require('./../../assets/Phone.png')}
                      />
                      <Text className="text-xs text-white font-normal ml-2">
                        Call
                      </Text>
                    </Button>
                  </View>

                  <View className="flex-row justify-between w-[90%] mt-7">
                    <Button
                      title="Pickup"
                      color="#15803D"
                      buttonStyle={{borderRadius: 6, width: 82, height: 48}}
                      titleStyle={{
                        color: '#FAFAFA',
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                      style={{padding: 5}}
                      onPress={() => {
                        openMapWithDirections(
                          state?.user?.driverCoords?.latitude,
                          state?.user?.driverCoords?.longitude,
                          trip?.pickup_lat,
                          trip?.pickup_lon,
                        );

                        return setButton('dropoff');
                      }}
                    />

                    <Button
                      title="Drop-off"
                      color="#D97706"
                      buttonStyle={{borderRadius: 6, width: 82, height: 48}}
                      titleStyle={{
                        color: '#FAFAFA',
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                      style={{padding: 5}}
                      disabled={button === 'pickup' ? true : false}
                      onPress={() => {
                        openMapWithDirections(
                          state?.user?.driverCoords?.latitude,
                          state?.user?.driverCoords?.longitude,
                          trip?.dropoff_lat,
                          trip?.dropoff_lon,
                        );
                        return setButton('end');
                      }}
                    />

                    <Button
                      title="End ride"
                      color="#991B1B"
                      buttonStyle={{borderRadius: 6, width: 82, height: 48}}
                      titleStyle={{
                        color: '#FAFAFA',
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                      style={{padding: 5}}
                      disabled={button === 'end' ? false : true}
                      onPress={async () => {
                        await EndRide(trip?.id);

                        navigation.navigate('bookSuccess', {
                          id: trip?.id,
                          fare: trip?.fare_amount,
                        });
                      }}
                    />
                  </View>
                </View>
              ))
            : null}

          <View className="bg-[#161616] mt-3 w-full h-[139] rounded-lg items-center justify-center">
            <Text className="text-white font-bold text-2xl">
              No ride requests {'\n'} at the moment
            </Text>
          </View>

          <View className="bg-[#161616] mt-3 w-full h-[139] rounded-lg items-center justify-center">
            <Text className="text-white font-bold text-2xl">
              No ride requests {'\n'} at the moment
            </Text>
          </View>

          <View className="bg-[#161616] mt-3 w-full h-[139] rounded-lg items-center justify-center">
            <Text className="text-white font-bold text-2xl">
              No ride requests {'\n'} at the moment
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Passengers;
