import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {device_width} from './dimensions';
import {Colors} from '../Utils/colors';

const Dropdown = ({
  label,
  items,
  is_open,
  toggle_open,
  value,
  set_value,
  on_change,
  z_index,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        open={is_open}
        setOpen={toggle_open}
        items={items}
        value={value}
        setValue={set_value}
        maxHeight={250}
        autoScroll
        placeholder={label}
        placeholderStyle={{color: Colors.GRAY}}
        onChangeValue={on_change}
        style={{minHeight: 37, borderWidth: 0, backgroundColor: Colors.WHITE}}
        dropDownContainerStyle={{backgroundColor: Colors.WHITE, borderWidth: 0}}
        // containerStyle={{backgroundColor: Colors.LIGHT_GRAY }}
        zIndex={z_index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: device_width * 0.85,
    marginVertical: 10,
    alignSelf: 'center',
  },
  label: {
    color: Colors.WHITE,
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Dropdown;
