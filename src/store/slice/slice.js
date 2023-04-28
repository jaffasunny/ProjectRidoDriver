import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    coords: null,
    previewRideData: null,
    rideDetails: null,
    seekDetails: null,
    driverTrips: null,
    driverCoords: null,
  },
  reducers: {
    AddUser(state, action) {
      state.user = action.payload;
    },
    RemoveUser(state) {
      state.user = null;
    },
    AddUserCoords(state, action) {
      state.coords = action.payload;
    },
    AddPreviewRideData(state, action) {
      state.previewRideData = action.payload;
    },
    AddRideDetails(state, action) {
      state.rideDetails = action.payload;
    },
    AddSeekReqDetails(state, action) {
      state.seekDetails = action.payload;
    },
    ClearSeekReqDetails(state) {
      state.seekDetails = null;
    },
    AddDriverTripDetails(state, action) {
      state.driverTrips = action.payload;
    },
    AddDriverCoords(state, action) {
      state.driverCoords = action.payload;
    },
    logout(state) {
      state.user = null;
      state.coords = null;
      state.previewRideData = null;
      state.rideDetails = null;
      state.seekDetails = null;
      state.driverTrips = null;
      state.driverCoords = null;
    },
  },
});

export {UserSlice};
export const {
  AddUser,
  RemoveUser,
  AddUserCoords,
  AddPreviewRideData,
  AddRideDetails,
  logout,
  AddSeekReqDetails,
  ClearSeekReqDetails,
  AddDriverTripDetails,
  AddDriverCoords,
} = UserSlice.actions;
