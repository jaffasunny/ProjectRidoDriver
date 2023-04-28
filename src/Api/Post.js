import axios from 'axios';
import Toast from 'react-native-toast-message';
import {showToast} from '../utils/ShowToast/ShowToast';

export const SignUpApi = async data => {
  let {email, fullName, password, phone, liscense} = data;

  try {
    let res = await axios.post('https://rido-api.onrender.com/driver_signup', {
      name: fullName,
      email,
      password,
      phone_number: phone,
      license_number: liscense,
    });

    showToast(res);

    return res?.data?.driver_id;
  } catch (error) {
    showToast(error?.response);
  }
};

export const LoginApi = async data => {
  let {email, password} = data;

  try {
    let res = await axios.post('https://rido-api.onrender.com/driver_login', {
      email,
      password,
    });

    if (res) {
      showToast(res);
    }

    return res?.data;
  } catch (error) {
    showToast(error?.response);
  }
};

export const AddVehicle = async (value, driver_id) => {
  try {
    let res = await axios.post('https://rido-api.onrender.com/add_vehicle', {
      make: `${value?.vehicle_name}`,
      model: `${value?.vehicle_model}`,
      year: Number(value?.year),
      license_plate: `${value.license_plate}`,
      driver_id: Number(driver_id),
      max_capacity: Number(value?.maximum_capacity),
    });

    Toast.show({
      type: 'success',
      text1: 'Vehicle registered!',
    });

    return res;
  } catch (error) {
    console.log('vehicle error', error.response);
    showToast(error?.response);
  }
};
