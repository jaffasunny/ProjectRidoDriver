import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {ClearSeekReqDetails} from '../../store/slice/slice';
import {useDispatch, useSelector} from 'react-redux';
import {AcceptRequest, RejectRequest} from '../../Api/Put';

const Rider = ({setIsRide, navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleAccetRequest = async () => {
    let res = AcceptRequest(state?.user?.seekDetails?.id);

    setTimeout(() => {
      navigation.navigate('Passengers');
    }, 8000);
  };

  const handleRejectRequest = async () => {
    let res = await RejectRequest(state?.user?.seekDetails?.id);

    if (res) {
      setIsRide(false);
      dispatch(ClearSeekReqDetails());
    }
  };

  return (
    <View className="bg-[#161616] rounded-lg min-h-[45%] py-3">
      <View className="ml-[3%] mb-3">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white font-normal text-xl">Estimated Fare</Text>
          <Text className="text-[#A5B4FC] font-bold text-xl">
            Rs {state?.user?.seekDetails ? state?.user?.seekDetails?.fare : 300}
          </Text>
        </View>
        <View
          className="self-end bg-[#FACC15] items-center justify-center"
          style={{width: 90, height: 26, borderRadius: 4}}>
          <Text className="text-black text-xs">Shared Trip</Text>
        </View>
      </View>

      <View className="flex-row">
        <View className="h-24">
          <Image
            style={{
              height: '100%',
              objectFit: 'contain',
            }}
            source={require('./../../assets/startToEnd.png')}
          />
        </View>

        <View className="min-h-28 w-80 justify-between">
          <View>
            <Text className="text-white font-extralight mb-2">Pick-up</Text>
            <Text className="font-semibold text-white">
              {state?.user?.seekDetails
                ? state?.user?.seekDetails?.pickup_address
                : '2972 Westheimer Rd. Santa Ana, Illinois 85486'}
            </Text>
          </View>
          <View>
            <Text className="text-white font-extralight my-2">Drop-off</Text>
            <Text className="font-semibold text-white">
              {state?.user?.seekDetails
                ? state?.user?.seekDetails?.dropoff_address
                : '2715 Ash Dr. San Jose, South Dakota 83475'}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-around mt-6">
        <TouchableOpacity
          style={{width: '45%', height: 70}}
          onPress={handleRejectRequest}>
          <LinearGradient
            colors={['#D85D55', '#74150E']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Reject</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={{width: '45%', height: 70}}
          onPress={handleAccetRequest}>
          <LinearGradient
            colors={['#3C9C6E', '#036536']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Accept</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    // font-weight: 700;
    // font-size: 24px;
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Rider;
