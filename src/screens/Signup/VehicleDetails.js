import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GlobalStyles from '../../constants/GlobalStyles';
import {Button, Input, Icon, CheckBox} from '@rneui/themed';
import Success from '../misc/Success';
import DropDown from '../../utils/DropDown/DropDown';
import {AddVehicle} from '../../Api/Post';

const VehicleDetails = ({route, navigation}) => {
  const [focusBorder, setfocusBorder] = useState(false);
  const [selectedIndex, setIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState({});

  const {driver_id} = route.params;

  const handleAddVehicle = async () => {
    let res = await AddVehicle(vehicleInfo, driver_id);
    if (res) {
      setSuccess(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {!success ? (
        <View className="flex items-center mt-16">
          <View className="w-80">
            <Text
              style={GlobalStyles.text}
              className="text-white font-bold text-4xl text-center">
              Vehicle Details
            </Text>
            <View className="mt-7">
              <Text
                style={GlobalStyles.text}
                className="text-white font-medium text-sm mb-1">
                Vehicle make
              </Text>
              <Input
                name="vehicle_name"
                inputContainerStyle={{
                  borderColor: focusBorder[0] === 1 ? 'blue' : '#D4D4D4',
                  borderEndWidth: 1,
                  borderStartWidth: 1,
                  borderTopWidth: 1,
                  padding: 0,
                  borderRadius: 4,
                  borderColor: '#171717',
                  backgroundColor: '#171717',
                }}
                containerStyle={{
                  height: 50,
                  paddingHorizontal: 0,
                }}
                style={{color: '#fff'}}
                onFocus={e => setfocusBorder([1, true])}
                onBlur={e => setfocusBorder([1, false])}
                onChangeText={value =>
                  setVehicleInfo({
                    ...vehicleInfo,
                    vehicle_name: value,
                  })
                }
              />
            </View>
            <View className="mt-3">
              <Text
                style={GlobalStyles.text}
                className="text-white font-medium text-sm mb-1">
                Vehicle model
              </Text>
              <Input
                name="vehicle_model"
                inputContainerStyle={{
                  borderColor: focusBorder[0] === 2 ? 'blue' : '#D4D4D4',
                  borderEndWidth: 1,
                  borderStartWidth: 1,
                  borderTopWidth: 1,
                  padding: 0,
                  borderRadius: 4,
                  borderColor: '#171717',
                  backgroundColor: '#171717',
                }}
                style={{color: '#fff'}}
                containerStyle={{
                  height: 50,
                  paddingHorizontal: 0,
                }}
                onFocus={e => setfocusBorder([2, true])}
                onBlur={e => setfocusBorder([2, false])}
                onChangeText={value =>
                  setVehicleInfo({
                    ...vehicleInfo,
                    vehicle_model: value,
                  })
                }
              />
            </View>
            <View className="mt-3">
              <Text
                style={GlobalStyles.text}
                className="text-white font-medium text-sm mb-1">
                Year
              </Text>
              <Input
                name="year"
                inputContainerStyle={{
                  borderColor: focusBorder[0] === 2 ? 'blue' : '#D4D4D4',
                  borderEndWidth: 1,
                  borderStartWidth: 1,
                  borderTopWidth: 1,
                  padding: 0,
                  borderRadius: 4,
                  borderColor: '#171717',
                  backgroundColor: '#171717',
                }}
                containerStyle={{
                  height: 50,
                  paddingHorizontal: 0,
                }}
                style={{color: '#fff'}}
                onFocus={e => setfocusBorder([2, true])}
                onBlur={e => setfocusBorder([2, false])}
                onChangeText={value =>
                  setVehicleInfo({
                    ...vehicleInfo,
                    year: value,
                  })
                }
              />
            </View>
            <View className="mt-3">
              <Text
                style={GlobalStyles.text}
                className="text-white font-medium text-sm mb-1">
                License plate
              </Text>
              <Input
                name="license_plate"
                inputContainerStyle={{
                  borderColor: focusBorder[0] === 2 ? 'blue' : '#D4D4D4',
                  borderEndWidth: 1,
                  borderStartWidth: 1,
                  borderTopWidth: 1,
                  padding: 0,
                  borderRadius: 4,
                  borderColor: '#171717',
                  backgroundColor: '#171717',
                }}
                style={{color: '#fff'}}
                containerStyle={{
                  height: 50,
                  paddingHorizontal: 0,
                }}
                onFocus={e => setfocusBorder([2, true])}
                onBlur={e => setfocusBorder([2, false])}
                onChangeText={value =>
                  setVehicleInfo({
                    ...vehicleInfo,
                    license_plate: value,
                  })
                }
              />
            </View>
            <View className="mt-3">
              <Text
                style={GlobalStyles.text}
                className="text-white font-medium text-sm mb-1">
                Maximum capacity
              </Text>
              <Input
                name="maximum_capacity"
                inputContainerStyle={{
                  borderColor: focusBorder[0] === 2 ? 'blue' : '#D4D4D4',
                  borderEndWidth: 1,
                  borderStartWidth: 1,
                  borderTopWidth: 1,
                  padding: 0,
                  borderRadius: 4,
                  borderColor: '#171717',
                  backgroundColor: '#171717',
                }}
                style={{color: '#fff'}}
                containerStyle={{
                  height: 50,
                  paddingHorizontal: 0,
                }}
                onChangeText={value =>
                  setVehicleInfo({
                    ...vehicleInfo,
                    maximum_capacity: value,
                  })
                }
                onFocus={e => setfocusBorder([2, true])}
                onBlur={e => setfocusBorder([2, false])}
              />
            </View>

            <View className="self-center mt-20">
              <View className="flex flex-row justify-end w-80">
                <Button
                  title="Complete Sign up"
                  color="#4F46E5"
                  buttonStyle={{borderRadius: 6, width: 180, height: 50}}
                  titleStyle={{
                    color: '#FAFAFA',
                    fontSize: 16,
                  }}
                  style={{padding: 5}}
                  onPress={handleAddVehicle}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Success navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default VehicleDetails;
