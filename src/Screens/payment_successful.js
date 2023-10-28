import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../Utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import {device_height, device_width} from '../Components/dimensions';
import {useNavigation} from '@react-navigation/native';

const PaymentSuccessful = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 1, routes: [{name: 'home'}]});
    }, 1500);
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        height: device_height,
        width: device_width,
      }}>
      <Icon
        style={{textAlign: 'center'}}
        name="check-circle"
        size={190}
        color={Colors.WHITE}
      />
      <Text
        style={{
          fontSize: 31,
          fontWeight: 'bold',
          color: Colors.WHITE,
          padding: 40,
          textAlign: 'center',
        }}>
        Please check your WhatsApp. we have sent you the details
      </Text>
    </View>
  );
};

export default PaymentSuccessful;
