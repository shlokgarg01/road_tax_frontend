import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../Utils/colors';

const Input = ({
  title,
  value,
  on_change,
  keyboard_type,
  placeholder,
  disabled,
  on_press,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity onPress={on_press} activeOpacity={1}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY}
          style={styles.text_input}
          keyboardType={keyboard_type}
          onChangeText={on_change}
          editable={disabled ? false : true}
          pointerEvents="none"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  label: {
    color: Colors.WHITE,
    fontSize: 16,
    marginBottom: 5,
  },
  text_input: {
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
    borderRadius: 7,
    height: 37,
    paddingLeft: 10,
  },
});

export default Input;
