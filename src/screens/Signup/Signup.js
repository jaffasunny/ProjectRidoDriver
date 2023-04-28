import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GlobalStyles from '../../constants/GlobalStyles';
import {Button, Input, Icon, CheckBox} from '@rneui/themed';
import Success from '../misc/Success';
import DropDown from '../../utils/DropDown/DropDown';

import {signUpValidation} from '../../validation/Validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {SignUpApi} from '../../Api/Post';
// import {SignUpApi} from '../../Api/Post';

const Signup = ({navigation}) => {
  const [focusBorder, setfocusBorder] = useState(false);
  const [success, setSuccess] = useState(false);
  const [genderValue, setGenderValue] = useState('');

  const validationSchema = signUpValidation();
  const formOptions = {
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formOptions);

  useEffect(() => {
    setSuccess(false);
  }, []);

  const onSubmit = async data => {
    let res = await SignUpApi(data);
    navigation.navigate('vehicleDetails', {driver_id: res});
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          minHeight: 100,
        }}>
        {!success ? (
          <View className="flex items-center justify-center min-h-screen">
            <View className="w-80 justify-between max-h-screen">
              <View>
                <Text
                  style={GlobalStyles.text}
                  className="text-white font-bold text-4xl text-center">
                  Signup
                </Text>

                <View className="mt-7">
                  <Text
                    style={GlobalStyles.text}
                    className="text-white font-medium text-sm mb-1">
                    Full name
                  </Text>
                  <Controller
                    control={control}
                    name="fullName"
                    render={({field: {onChange, value, onBlur}}) => (
                      <Input
                        inputContainerStyle={{
                          borderColor:
                            focusBorder[0] === 1
                              ? 'blue'
                              : errors?.fullName
                              ? 'red'
                              : '#171717',
                          borderEndWidth: 1,
                          borderStartWidth: 1,
                          borderTopWidth: 1,
                          padding: 0,
                          borderRadius: 4,
                          backgroundColor: '#171717',
                        }}
                        style={{color: '#fff'}}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        containerStyle={{
                          height: 50,
                          paddingHorizontal: 0,
                        }}
                        onFocus={e => setfocusBorder([1, true])}
                      />
                    )}
                  />
                  {errors?.fullName?.message ? (
                    <Text className="text-red-500 font-bold">
                      {errors?.fullName?.message}
                    </Text>
                  ) : null}
                </View>

                <View className="mt-1">
                  <Text
                    style={GlobalStyles.text}
                    className="text-white font-medium text-sm mb-1">
                    Email address
                  </Text>
                  <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, value, onBlur}}) => (
                      <Input
                        name="email"
                        inputContainerStyle={{
                          borderColor:
                            focusBorder[0] === 2
                              ? 'blue'
                              : errors?.email
                              ? 'red'
                              : '#171717',
                          borderEndWidth: 1,
                          borderStartWidth: 1,
                          borderTopWidth: 1,
                          padding: 0,
                          borderRadius: 4,
                          backgroundColor: '#171717',
                        }}
                        style={{color: '#fff'}}
                        containerStyle={{
                          height: 50,
                          paddingHorizontal: 0,
                        }}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        onFocus={e => setfocusBorder([2, true])}
                      />
                    )}
                  />
                  {errors?.email?.message ? (
                    <Text className="text-red-500 font-bold">
                      {errors?.email?.message}
                    </Text>
                  ) : null}
                </View>

                <View className="mt-1">
                  <Text className="text-white mb-1">Gender</Text>
                  <Controller
                    control={control}
                    name="gender"
                    render={({field: {onChange, value}}) => (
                      <DropDown
                        value={value}
                        onChange={onChange}
                        setGenderValue={setGenderValue}
                        errors={errors?.gender}
                      />
                    )}
                  />
                  {errors?.gender ? (
                    <Text className="text-red-500 font-bold -z-50">
                      {errors?.gender?.message}
                    </Text>
                  ) : null}
                </View>

                <View className="mt-1 -z-10">
                  <Text
                    style={GlobalStyles.text}
                    className="text-white font-medium text-sm mb-1">
                    Phone number
                  </Text>
                  <Controller
                    control={control}
                    name="phone"
                    render={({field: {onChange, value, onBlur}}) => (
                      <Input
                        name="phone"
                        inputContainerStyle={{
                          borderColor:
                            focusBorder[0] === 3
                              ? 'blue'
                              : errors?.phone
                              ? 'red'
                              : '#171717',
                          borderEndWidth: 1,
                          borderStartWidth: 1,
                          borderTopWidth: 1,
                          padding: 0,
                          borderRadius: 4,
                          backgroundColor: '#171717',
                        }}
                        style={{color: '#fff'}}
                        containerStyle={{
                          height: 50,
                          paddingHorizontal: 0,
                        }}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        onFocus={e => setfocusBorder([3, true])}
                      />
                    )}
                  />
                  {errors?.phone?.message ? (
                    <Text className="text-red-500 font-bold">
                      {errors?.phone?.message}
                    </Text>
                  ) : null}
                </View>

                <View className="mt-1">
                  <Text
                    style={GlobalStyles.text}
                    className="text-white font-medium text-sm mb-1">
                    Password
                  </Text>
                  <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, value, onBlur}}) => (
                      <Input
                        name="password"
                        secureTextEntry={true}
                        inputContainerStyle={{
                          borderColor:
                            focusBorder[0] === 5
                              ? 'blue'
                              : errors?.password
                              ? 'red'
                              : '#171717',
                          borderEndWidth: 1,
                          borderStartWidth: 1,
                          borderTopWidth: 1,
                          padding: 0,
                          borderRadius: 4,
                          backgroundColor: '#171717',
                        }}
                        style={{color: '#fff'}}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        containerStyle={{
                          height: 50,
                          paddingHorizontal: 0,
                        }}
                        onFocus={e => setfocusBorder([5, true])}
                      />
                    )}
                  />
                  {errors?.password?.message ? (
                    <Text className="text-red-500 font-bold">
                      {errors?.password?.message}
                    </Text>
                  ) : null}
                </View>

                <View className="mt-1">
                  <Text
                    style={GlobalStyles.text}
                    className="text-white font-medium text-sm mb-1">
                    License number
                  </Text>
                  <Controller
                    control={control}
                    name="liscense"
                    render={({field: {onChange, value, onBlur}}) => (
                      <Input
                        name="liscense"
                        inputContainerStyle={{
                          borderColor:
                            focusBorder[0] === 6
                              ? 'blue'
                              : errors?.liscense
                              ? 'red'
                              : '#171717',
                          borderEndWidth: 1,
                          borderStartWidth: 1,
                          borderTopWidth: 1,
                          padding: 0,
                          borderRadius: 4,
                          backgroundColor: '#171717',
                        }}
                        style={{color: '#fff'}}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onBlur={onBlur}
                        containerStyle={{
                          height: 50,
                          paddingHorizontal: 0,
                        }}
                        onFocus={e => setfocusBorder([6, true])}
                      />
                    )}
                  />
                  {errors?.liscense?.message ? (
                    <Text className="text-red-500 font-bold">
                      {errors?.liscense?.message}
                    </Text>
                  ) : null}
                </View>

                <View>
                  <Controller
                    control={control}
                    name="permission"
                    render={({field: {onChange, value}}) => {
                      return (
                        <CheckBox
                          title="Agree to meet terms and conditions"
                          checked={value}
                          onPress={() => onChange(!value)}
                          checkedIcon={
                            <Icon
                              name="dot-circle-o"
                              type="font-awesome"
                              color="blue"
                              size={24}
                            />
                          }
                          uncheckedIcon={
                            <Icon
                              name="circle-o"
                              type="font-awesome"
                              color={errors?.permission ? 'red' : '#D4D4D4'}
                              size={24}
                            />
                          }
                          containerStyle={{
                            paddingHorizontal: 0,
                            paddingBottom: 0,
                            marginHorizontal: 0,
                            backgroundColor: 'black',
                          }}
                          textStyle={{color: 'white'}}
                        />
                      );
                    }}
                  />
                </View>
              </View>

              <View className="flex-row justify-between mt-4">
                <Button
                  title="Back"
                  type="clear"
                  color="#A5B4FC"
                  titleStyle={{
                    color: 'white',
                    fontSize: 16,
                  }}
                  style={{padding: 5}}
                  onPress={() => navigation.navigate('startScreen')}>
                  <Icon name="chevron-left" color="#A5B4FC" />
                  <Text className="text-base text-[#A5B4FC] font-normal">
                    Back
                  </Text>
                </Button>
                <Button
                  title="Next"
                  color="#4F46E5"
                  buttonStyle={{borderRadius: 6, width: 100, height: 50}}
                  titleStyle={{
                    color: 'white',
                    fontSize: 16,
                  }}
                  style={{padding: 5}}
                  onPress={handleSubmit(onSubmit)}
                />
              </View>
            </View>
          </View>
        ) : (
          <Success navigation={navigation} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
