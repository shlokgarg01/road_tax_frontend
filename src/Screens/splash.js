import {View, Image, Text} from 'react-native';
import {device_height, device_width} from '../Components/dimensions';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Colors } from '../Utils/colors';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 1, routes: [{name: 'home'}]});
    }, 2500);
  }, []);

  return (
    <View
      style={{
        height: device_height,
        width: device_width,
        backgroundColor: '#D0E1E3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Image
        source={require('../../assets/pre_loader.gif')}
        style={{height: 220, width: 220}}
      />
      <Text style={{ color: Colors.BLACK, fontSize: 19, fontFamily: 'Montserrat-Bold' }}>Aap car chalao</Text>
      <Text style={{ color: Colors.BLACK, fontSize: 19, fontFamily: 'Montserrat-Bold' }}>tax hum kaat denge</Text>
    </View>
  );
};

export default Splash;
