// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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
// import {useDispatch} from 'react-redux';
// import {AddRoute} from '../../store/slice/routeSlice';
import {useRoute} from '@react-navigation/native';
import Rider from '../../components/Rider/Rider';

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

export default function App({navigation}) {
  const [isRide, setIsRide] = useState(false);

  return (
    <View className="bg-black h-full items-center">
      <View className="w-[90%] justify-between">
        {isRide ? (
          <Rider setIsRide={setIsRide} navigation={navigation} />
        ) : (
          <TouchableOpacity
            style={{height: '45%'}}
            onPress={() => setIsRide(true)}>
            <View className="bg-[#161616] h-full w-full rounded-lg items-center justify-center">
              <Text className="text-white font-bold text-2xl">
                No ride requests {'\n'} at the moment
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View className="bg-[#161616] h-[45%] w-full rounded-lg items-center justify-center">
          <Text className="text-white font-bold text-2xl">MAP</Text>
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
    height: '60%',
    marginTop: '40%',
    zIndex: -1,
  },
  searchContainer: {
    width: '90%',
    minHeight: 20,
    position: 'absolute',
    top: StatusBar.currentHeight,
    padding: 8,
    borderRadius: 8,
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
