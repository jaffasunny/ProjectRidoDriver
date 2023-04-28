import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import GlobalStyles from '../../constants/GlobalStyles';
import {Button, Input, Icon} from '@rneui/themed';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginValidation} from '../../validation/Validation';
import {LoginApi} from '../../Api/Post';
import {AddUser} from '../../store/slice/slice';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [focusBorder, setfocusBorder] = useState(false);

  const dispatch = useDispatch();

  const validationSchema = loginValidation();
  const formOptions = {
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(formOptions);

  const onSubmit = async data => {
    let user = await LoginApi(data);

    if (user) {
      // Storing in store
      dispatch(AddUser(user));
      navigation.navigate('drawerScreens');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex">
        <View className="flex-1 absolute w-full h-72">
          <Image
            className="w-full h-full"
            source={require('./../../assets/gradient.png')}
          />
        </View>
        <View className="justify-end items-center w-full h-60 ml-auto">
          <Image
            className="w-32 h-32"
            source={require('./../../assets/logo.png')}
          />
        </View>
      </View>
      <View className="flex items-center mt-16">
        <View className="w-80">
          <Text
            style={GlobalStyles.text}
            className="text-white font-normal text-xl text-center">
            Login to your account
          </Text>
          <View className="mt-7">
            <Text
              style={GlobalStyles.text}
              className="text-white font-medium text-sm">
              Email address
            </Text>
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, value, onBlur}}) => (
                <Input
                  inputContainerStyle={{
                    borderColor:
                      focusBorder[0] === 1 && focusBorder[1]
                        ? 'blue'
                        : errors?.email
                        ? 'red'
                        : '#171717',
                    backgroundColor: '#171717',
                    borderEndWidth: 1,
                    borderStartWidth: 1,
                    borderTopWidth: 1,
                    padding: 0,
                    borderRadius: 4,
                  }}
                  onChangeText={value => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  containerStyle={{
                    height: 50,
                    paddingHorizontal: 0,
                  }}
                  style={{color: '#fff'}}
                  onFocus={e => setfocusBorder([1, true])}
                />
              )}
            />
            {errors?.email?.message ? (
              <Text className="text-red-500 font-bold">
                {errors.email.message}
              </Text>
            ) : null}
          </View>
          <View className="my-3">
            <Text
              style={GlobalStyles.text}
              className="text-white font-medium text-sm">
              Password
            </Text>
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value, onBlur}}) => (
                <Input
                  name="password"
                  inputContainerStyle={{
                    borderColor:
                      focusBorder[0] === 2 && focusBorder[1]
                        ? 'blue'
                        : errors?.password
                        ? 'red'
                        : '#171717',
                    backgroundColor: '#171717',
                    borderEndWidth: 1,
                    borderStartWidth: 1,
                    borderTopWidth: 1,
                    padding: 0,
                    borderRadius: 4,
                  }}
                  onChangeText={value => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                  containerStyle={{
                    height: 50,
                    paddingHorizontal: 0,
                  }}
                  style={{color: '#fff'}}
                  secureTextEntry={true}
                  onFocus={e => setfocusBorder([2, true])}
                />
              )}
            />
            {errors?.password?.message ? (
              <Text className="text-red-500 font-bold">
                {errors.password.message}
              </Text>
            ) : null}
          </View>

          <View className="self-center mt-7 mb-10">
            <View className="flex flex-row justify-between w-80">
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
                title="Login"
                color="#4F46E5"
                buttonStyle={{borderRadius: 6, width: 150, height: 50}}
                titleStyle={{
                  color: '#FAFAFA',
                  fontSize: 16,
                }}
                style={{padding: 5}}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
          <Text className="text-base text-white text-center">
            Dont have an account?
          </Text>
          <Button
            type="clear"
            title="Signup"
            titleStyle={{
              color: '#A5B4FC',
            }}
            onPress={() => navigation.navigate('signup')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
