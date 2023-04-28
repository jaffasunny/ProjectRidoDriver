import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GlobalStyles from '../../constants/GlobalStyles';
import {Button, Input, Icon, CheckBox} from '@rneui/themed';
import Success from '../misc/Success';
import DropDown from '../../utils/DropDown/DropDown';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {signUpValidation} from '../../validation/Validation';
import {ScrollView} from 'react-native-gesture-handler';

const Signup = ({navigation}) => {
  const [focusBorder, setfocusBorder] = useState(false);
  const [selectedIndex, setIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [genderValue, setGenderValue] = useState('');

  const validationSchema = signUpValidation();
  const formOptions = {
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {permission: false},
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formOptions);

  const onSubmit = data => {
    console.log('Form Data!', data);
    // let {email, fullName, password, phone} = data;

    // try {
    //   let res = await axios.post('https://rido-api.onrender.com/rider_signup', {
    //     name: fullName,
    //     email,
    //     gender: genderValue,
    //     password,
    //     phone_number: phone,
    //   });
    //   console.log('res', res);
    //   if (res) {
    //     showToast();
    //     // navigation.navigate('vehicleDetails');
    //   }
    // } catch (error) {
    //   console.log('error', error);
    //   showToast(error);
    // }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {!success ? (
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            height: '100%',
          }}>
          <View className="flex items-center mt-16">
            <View className="w-80">
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
                      name="fullName"
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
                      onChangeText={value => onChange(value)}
                      value={value}
                      onBlur={onBlur}
                      containerStyle={{
                        height: 50,
                        paddingHorizontal: 0,
                      }}
                      onFocus={e => setfocusBorder([2, true])}
                    />
                  )}
                />
                {errors?.email?.message ? (
                  <Text className="text-red-500 font-bold">
                    {errors?.email.message}
                  </Text>
                ) : null}
              </View>

              <View className="mt-1">
                <Text className="text-white mb-1">Gender</Text>
                <Controller
                  control={control}
                  defaultValue=""
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
                          focusBorder[0] === 3
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
                      onFocus={e => setfocusBorder([3, true])}
                    />
                  )}
                />
                {errors?.password?.message ? (
                  <Text className="text-red-500 font-bold">
                    {errors?.password.message}
                  </Text>
                ) : null}
              </View>
              <View className="mt-1 -z-10">
                <Text
                  style={GlobalStyles.text}
                  className="text-white font-medium text-sm mb-1">
                  Retype Password
                </Text>
                <Controller
                  control={control}
                  name="repassword"
                  render={({field: {onChange, value, onBlur}}) => (
                    <Input
                      secureTextEntry={true}
                      inputContainerStyle={{
                        borderColor:
                          focusBorder[0] === 4
                            ? 'blue'
                            : errors?.repassword
                            ? 'red'
                            : '#171717',
                        borderEndWidth: 1,
                        borderStartWidth: 1,
                        borderTopWidth: 1,
                        padding: 0,
                        borderRadius: 4,
                        backgroundColor: '#171717',
                      }}
                      containerStyle={{
                        height: 50,
                        paddingHorizontal: 0,
                      }}
                      style={{color: '#fff'}}
                      onChangeText={value => onChange(value)}
                      value={value}
                      onBlur={onBlur}
                      onFocus={e => setfocusBorder([4, true])}
                    />
                  )}
                />
                {errors?.repassword?.message ? (
                  <Text className="text-red-500 font-bold">
                    {errors?.repassword?.message}
                  </Text>
                ) : null}
              </View>
              <View className="mt-1">
                <Controller
                  control={control}
                  name="permission"
                  render={({field: {onChange, value}}) => {
                    return (
                      <CheckBox
                        title="Agree to meet terms & conditions"
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
                          focusBorder[0] === 2
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
                      onFocus={e => setfocusBorder([2, true])}
                    />
                  )}
                />
                {errors?.liscense?.message ? (
                  <Text className="text-red-500 font-bold">
                    {errors?.liscense.message}
                  </Text>
                ) : null}
              </View>

              <View className="flex-row justify-between mt-4">
                <Button
                  title="Back"
                  type="clear"
                  color="#A5B4FC"
                  titleStyle={{
                    color: '#FAFAFA',
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
                    color: '#FAFAFA',
                    fontSize: 16,
                  }}
                  style={{padding: 5}}
                  onPress={handleSubmit(onSubmit)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <Success navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

export default Signup;
