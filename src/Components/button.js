import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {device_width} from './dimensions';

const Btn = ({
  title,
  btn_color,
  text_color,
  btn_handler,
  width,
  type,
  is_need_help,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: btn_color,
        borderRadius: 50,
        elevation: 10,
        width: width ? width : device_width * 0.7,
        alignSelf: 'center',
        marginVertical: type === 'Submit' ? 25 : 10,
        flexDirection: is_need_help ? "row": null,
        justifyContent: is_need_help ? "center": null,
        alignItems: is_need_help ? "center" : null
      }}
      onPress={btn_handler}>
      {is_need_help ? (
        <Image
          source={require('../../assets/need_help.png')}
          style={{
            height: 34,
            width: 34,
          }}
        />
      ) : null}
      <Text
        style={{
          color: text_color,
          fontSize: 19,
          paddingVertical: 5,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
