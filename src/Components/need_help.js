import {TouchableOpacity, Image, Linking, Text} from 'react-native';
import React from 'react';

const NeedHelp = () => {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        position: 'absolute',
        bottom: 200,
        left: 34,
      }}
      onPressIn={() => Linking.openURL('whatsapp://send?phone=918708387087')}>
      <Image
        source={require('../../assets/need_help.png')}
        style={{
          height: 70,
          width: 70
        }}
      />
      <Text style={{color: 'black', fontWeight: 'bold', marginLeft: -10}}>Need Help?</Text>
    </TouchableOpacity>
  );
};

export default NeedHelp;
