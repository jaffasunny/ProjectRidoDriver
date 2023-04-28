import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  Image,
} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {GOOGLE_API_KEY} from './../../../env/Keys';
import {useEffect, useRef, useState} from 'react';
// import MapViewDirections from 'react-native-maps-directions';
// import Geolocation from 'react-native-geolocation-service';
import {Button, Icon, Overlay} from '@rneui/themed';
import PushNotification from 'react-native-push-notification';
import {useRoute} from '@react-navigation/native';
import Rider from '../../components/Rider/Rider';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateDriverPos} from '../../Api/Put';
import Geolocation from '@react-native-community/geolocation';
import {SeekRequest} from '../../Api/Get';
import {
  AddDriverCoords,
  AddSeekReqDetails,
  ClearSeekReqDetails,
} from '../../store/slice/slice';

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let driverCurr;

export default function App({navigation}) {
  const [isRide, setIsRide] = useState(false);
  const [stopInterval, setStopInterval] = useState(false);
  const mapRef = useRef(null);

  const [postionCoord, setPostionCoord] = useState({
    latitude: 40.76711,
    longitude: -73.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleNotification = item => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: "New ride request!",
      message: 'Click to view!',
    });
  };

  const handleLocation = async position => {
    try {
      await UpdateDriverPos(
        state?.user?.user?.driver_id,
        position?.coords?.latitude,
        position?.coords?.longitude,
        state?.user?.user?.token,
      );

      let seekRes = await SeekRequest(
        state?.user?.user?.driver_id,
        state?.user?.user?.token,
      );

      if (seekRes?.status === 200) {
        // console.log(seekRes);
        dispatch(AddSeekReqDetails(seekRes?.data));
        setIsRide(true);
        handleNotification();
      }
      if (seekRes?.status === 201) {
        dispatch(ClearSeekReqDetails());
        setIsRide(false);
      }
    } catch (error) {
      console.log('Update Drivers pos api failed', error.response);
    }
  };

  const getPostion = () => {
    return Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        handleLocation(position);
        setPostionCoord(position);
        dispatch(
          AddDriverCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    let interval = setInterval(() => {
      getPostion();
    }, 10000);

    // () => clearInterval(interval);
  }, []);

  return (
    <View className="bg-black h-full items-center">
      <View className="w-[90%] justify-between">
        {isRide ? (
          <Rider setIsRide={setIsRide} navigation={navigation} />
        ) : (
          <TouchableOpacity style={{height: '45%'}}>
            <View className="bg-[#161616] h-full w-full rounded-lg items-center justify-center">
              <Text className="text-white font-bold text-2xl">
                No ride requests {'\n'} at the moment
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View
          className="bg-[#161616] h-[45%] w-full rounded-lg items-center justify-center"
          style={{borderRadius: 14}}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={postionCoord}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  map: {
    width: Dimensions.get('window').width - 50,
    height: '100%',
    zIndex: -1,
    borderRadius: 10,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
