import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from '@rneui/themed';
import {Image} from 'react-native';

const Success = ({navigation}) => {
  return (
    <SafeAreaView className="bg-black">
      <View className="flex items-center">
        <View className="w-80 h-full items-center justify-center gap-y-6">
          <Image
            className="w-40 h-40"
            source={require('./../../assets/Success.png')}
          />
          <Text className="text-white font-bold text-4xl text-center mb-6">
            Profile created successfully
          </Text>

          <Button
            title="Login"
            color="#4F46E5"
            buttonStyle={{borderRadius: 6, width: 150, height: 50}}
            titleStyle={{
              color: '#FAFAFA',
              fontSize: 16,
            }}
            style={{padding: 5}}
            onPress={() => navigation.navigate('login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
