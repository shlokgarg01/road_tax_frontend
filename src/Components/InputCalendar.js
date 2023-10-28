import React from 'react';
import {Modal, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const InputCalendar = ({visible, on_change, close_calendar}) => {
  return (
    <Modal visible={visible} transparent onRequestClose={close_calendar}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
        <Calendar
          style={{elevation: 10, borderRadius: 10}}
          onDayPress={on_change}
        />
      </View>
    </Modal>
  );
};

export default InputCalendar;
