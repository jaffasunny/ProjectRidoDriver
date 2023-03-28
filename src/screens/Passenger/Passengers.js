import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button, Icon} from '@rneui/themed';

const Passengers = () => {
  return (
    <View className="bg-black h-full items-center">
      <View className="w-[90%] flex-row justify-end items-center">
        <Text className="text-white text-lg">Est Fare</Text>
        <Text className="text-[#A5B4FC] font-bold text-2xl ml-3">Rs 670</Text>
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
          <View className="bg-[#161616] w-full h-[139] rounded-lg items-center py-3">
            <View className="flex-row items-start justify-between w-[90%]">
              <Text className="text-white font-medium text-base">
                Jabbar Shafique
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
                onPress={() => navigation.navigate('vehicleDetails')}>
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
                title="Next"
                color="#15803D"
                buttonStyle={{borderRadius: 6, width: 82, height: 48}}
                titleStyle={{
                  color: '#FAFAFA',
                  fontSize: 16,
                  fontWeight: 500,
                }}
                style={{padding: 5}}
                // onPress={() => navigation.navigate('vehicleDetails')}
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
                disabled
                // onPress={() => navigation.navigate('vehicleDetails')}
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
                disabled
                // onPress={() => navigation.navigate('vehicleDetails')}
              />
            </View>
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
