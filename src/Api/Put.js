import axios from 'axios';
import {showToast} from '../utils/ShowToast/ShowToast';

export const UpdateDriverPos = async (id, lat, lon, token) => {
  const headers = {Authorization: `Bearer ${token}`};

  try {
    let res = await axios.put(
      'https://rido-api.onrender.com/update_driver_position',
      {
        driver_id: id,
        lat,
        lon,
      },
      {headers},
    );

    return res?.data;
  } catch (error) {
    console.log('api-error', error?.response);
  }
};

export const AcceptRequest = async id => {
  try {
    let res = await axios.put(
      `https://rido-api.onrender.com/accept_request?id=${id}`,
    );

    return res?.data;
  } catch (error) {
    console.log('AcceptRequest api-error', error?.response);
  }
};

export const RejectRequest = async id => {
  try {
    let res = await axios.put(
      `https://rido-api.onrender.com/reject_request?id=${id}`,
    );

    return res?.data;
  } catch (error) {
    console.log('AcceptRequest api-error', error?.response);
  }
};

export const EndRide = async id => {
  try {
    let res = await axios.put(
      `https://rido-api.onrender.com/complete_ride?id=${id}`,
    );
    console.log('🚀 ~ file: Put.js:32 ~ End ride ~ res:', res);

    return res?.data;
  } catch (error) {
    console.log('AcceptRequest api-error', error?.response);
  }
};

export const DriverLogout = async driver_id => {
  try {
    let res = await axios.put(
      `https://rido-api.onrender.com/driver_logout?driver_id=${driver_id}`,
    );
    console.log('🚀 ~ file: Put.js:32 ~ DriverLogout ~ res:', res);
  } catch (error) {
    console.log('AcceptRequest api-error', error?.response);
  }
};
