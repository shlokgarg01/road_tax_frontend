import React, {useEffect, useState} from 'react';
import {ScrollView, View, LogBox} from 'react-native';
import BackButtonHeading from '../Components/back_btn_heading';
import {Colors} from '../Utils/colors';
import Input from '../Components/Input';
import {device_height, device_width} from '../Components/dimensions';
import Dropdown from '../Components/Dropdown';
import SeatingCapacity from '../../assets/data/seating_capacity.json';
import TaxMode from '../../assets/data/road_tax_mode.json';
import Btn from '../Components/button';
import {useNavigation} from '@react-navigation/native';

const Form = props => {
  const navigation = useNavigation();

  const [is_seating_open, set_is_seating_open] = useState(false);
  const [is_tax_mode_open, set_is_tax_mode_open] = useState(false);
  const [tax_mode, set_tax_mode] = useState();

  const [vehicle_number, set_vehicle_number] = useState();
  const [chasis_number, set_chasis_number] = useState();
  const [contact_number, set_contact_number] = useState();
  const [seating, set_seating] = useState(null);
  const [error, set_error] = useState('');

  const params = () => [
    vehicle_number,
    chasis_number,
    seating,
    tax_mode,
    contact_number,
  ];
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, params());

  const validate = () => {
    set_error('');

    if (!vehicle_number || vehicle_number === '') {
      set_error('Vehicle Number is required');
      return false;
    } else if (!seating || seating === '') {
      set_error('Seating Capacity is required');
      return false;
    } else if (!contact_number) {
      set_error('Contact Number is required');
      return false;
    } else if (contact_number.length < 10) {
      set_error('Invalid Contact Number');
      return false;
    } else if (!chasis_number) {
      set_error('Chasis Number is required');
      return false;
    }

    return true;
  };

  //https://rto.onrender.com
  const submit = async () => {
    if (validate()) {
      let res = await fetch(`http://103.248.61.247:4000/api/v1/place_order`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          seating,
          vehicle_number,
          chasis_number,
          tax_mode,
          contact_number,
          tax_type: props.route.params.tax_type,
        }),
      });
      res = await res.json();

      if (res['is_success']) {
        navigation.reset({index: 1, routes: [{name: 'payment_successful'}]});
      } else {
        alert(res['message']);
      }
    } else {
      alert(error);
    }
  };

  return (
    <View style={{backgroundColor: Colors.WHITE}}>
      <BackButtonHeading title="Road Tax Details" />
      <ScrollView
        style={{
          backgroundColor: Colors.PRIMARY,
          height: device_height * 0.85,
          paddingTop: 40,
          borderTopRightRadius: 28,
          borderTopLeftRadius: 28,
          elevation: 10,
        }}>
        <Input
          title="Vehicle Number (गाडी नंबर)"
          placeholder="XX10ER0000"
          value={vehicle_number}
          on_change={val => set_vehicle_number(val)}
        />
        <Dropdown
          items={SeatingCapacity}
          value={seating}
          label="Seating Capacity (बैठने की क्षमता)"
          toggle_open={() => set_is_seating_open(!is_seating_open)}
          is_open={is_seating_open}
          set_value={val => set_seating(val)}
          z_index={2}
        />
        <Dropdown
          items={[
            {
              label: 'Monthly (मासिक)',
              value: 'Monthly',
            },
            {
              label: 'Quaterly (त्रैमासिक)',
              value: 'Quaterly',
            },
            {
              label: 'Yearly (वार्षिक)',
              value: 'Yearly',
            },
          ]}
          value={tax_mode}
          label="Tax Mode (टैक्स मोड)"
          toggle_open={() => set_is_tax_mode_open(!is_tax_mode_open)}
          is_open={is_tax_mode_open}
          set_value={val => set_tax_mode(val)}
          z_index={1}
        />
        <Input
          title="Chasis Number (चेसिस नंबर)"
          placeholder="1G1ZU648X5F100277"
          value={chasis_number}
          on_change={val => set_chasis_number(val)}
        />
        <Input
          title="Mobile Number (मोबाइल नंबर)"
          placeholder="9999999999"
          keyboard_type="number-pad"
          value={contact_number}
          on_change={val => set_contact_number(val)}
        />
        <Btn
          title="Submit (जमा करें)"
          width={device_width * 0.85}
          btn_color={Colors.WHITE}
          text_color={Colors.BLACK}
          btn_handler={submit}
          type="Submit"
        />
      </ScrollView>
    </View>
  );
};

export default Form;
