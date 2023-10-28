import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../Utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import {device_height, device_width} from './dimensions';
import {useNavigation} from '@react-navigation/native';

const BackButtonHeading = ({title, color}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: device_height * 0.15,
        backgroundColor:Colors.WHITE
      }}>
      {/* <TouchableOpacity
        style={{marginHorizontal: 10}}
        onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-left-circle"
          size={37}
          color={Colors.BLACK}
          style={{
            shadowOpacity: 2,
            textShadowRadius: 2,
            textShadowOffset: {width: 1, height: 1},
          }}
        />
      </TouchableOpacity> */}
      <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          color: color ? color : Colors.PRIMARY,
          width: device_width * 0.75,
        }}>
        रसीद प्राप्त करने का अनुमानित समय
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          color: color ? color : Colors.PRIMARY,
          width: device_width * 0.75,
        }}>
        Estimated time to receive receipt
      </Text>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          textAlign: 'center',
          color: Colors.RED,
          width: device_width * 0.75,
        }}>
        15 - 20 min
      </Text>
      </View>
    </View>
  );
};

export default BackButtonHeading;
