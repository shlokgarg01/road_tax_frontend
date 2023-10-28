import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, StyleSheet, LogBox} from 'react-native';
import BackButtonHeading from '../Components/back_btn_heading';
import {Colors} from '../Utils/colors';
import Input from '../Components/Input';
import {device_height, device_width} from '../Components/dimensions';
import Dropdown from '../Components/Dropdown';
import Cities from '../../assets/data/cities.json';
import States from '../../assets/data/states.json';
import TaxMode from '../../assets/data/road_tax_mode.json';
import SeatingCapacity from '../../assets/data/seating_capacity.json';
import InputCalendar from '../Components/InputCalendar';
import Btn from '../Components/button';
import {useNavigation} from '@react-navigation/native';
// import RNUpiPayment from 'react-native-upi-payment';
// import uuid from 'react-native-uuid';

const Form = props => {
  const navigation = useNavigation();

  const [is_state_open, set_is_state_open] = useState(false);
  const [is_city_open, set_is_city_open] = useState(false);
  const [is_tax_mode_open, set_is_tax_mode_open] = useState(false);
  const [is_seating_open, set_is_seating_open] = useState(false);
  const [cities_group, set_citites_group] = useState([]);
  const [show_start_date, set_show_start_date] = useState(false);
  const [show_end_date, set_show_end_date] = useState(false);

  const [vehicle_number, set_vehicle_number] = useState();
  const [contact_number, set_contact_number] = useState();
  const [tax_mode, set_tax_mode] = useState();
  const [seating, set_seating] = useState(null);
  const [state, set_state] = useState(null);
  const [city, set_city] = useState(null);
  const [start_date, set_start_date] = useState();
  const [end_date, set_end_date] = useState();
  const [charges, set_charges] = useState();
  const [error, set_error] = useState('');

  const params = () => [
    state,
    city,
    vehicle_number,
    contact_number,
    seating,
    tax_mode,
    start_date,
    end_date,
  ];

  const calculate_charges = async () => {
    let res = await fetch(
      `http://103.248.61.247:4000/api/v1/charges?start_date=${start_date}&end_date=${end_date}&seating=${seating}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      },
    );
    res = await res.json();
    if (res['is_success']) {
      set_charges(res['data']);
    } else {
      alert(res['message']);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    if (validate()) {
      calculate_charges();
    }
  }, params());

  const set_cities = () => {
    const state_code = States.find(obj => obj.name === state).isoCode;
    set_citites_group(Cities[state_code]);
  };

  const validate = () => {
    set_error('');

    if (!state || state === '') {
      set_error('State is required');
      return false;
    } else if (!city || city === '') {
      set_error('City is required');
      return false;
    } else if (!vehicle_number || vehicle_number === '') {
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
    } else if (!start_date) {
      set_error('Start Date is required');
      return false;
    } else if (!end_date) {
      set_error('End Date is required');
      return false;
    } else if (Date.parse(end_date) < Date.parse(start_date)) {
      set_error('Start Date cannot be more than End Date');
      return false;
    }

    return true;
  };

  // const make_payment = async () => {
  //   RNUpiPayment.initializePayment(
  //     {
  //       vpa: '8307747802@ybl',
  //       payeeName: 'Shlok Garg',
  //       amount: 1,
  //       transactionRef: uuid.v4(),
  //     },
  //     res => {
  //       console.log('Payment Success - ', res);
  //       submit_form();
  //     },
  //     err => {
  //       console.log('Payment Failure - ', err);
  //       alert("Payment Failure.")
  //     },
  //   );
  // };

  // http://192.168.1.7:8080 - local
  // http://103.248.61.247:4000/ - prod
  const submit = () => {
    if (validate()) {
      submit_form()
    } else {
      alert(error);
    }
  };

  const submit_form = async () => {
    let res = await fetch(`http://103.248.61.247:4000/api/v1/place_order`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        state,
        city,
        seating,
        vehicle_number,
        contact_number,
        tax_mode,
        start_date,
        end_date,
        tax_type: props.route.params.tax_type,
      }),
    });
    res = await res.json();

    if (res['is_success']) {
      navigation.reset({index: 1, routes: [{name: 'payment_successful'}]});
    } else {
      alert(res.message);
    }
  };

  return (
    <View style={{backgroundColor: Colors.WHITE}}>
      <BackButtonHeading title="Road Tax Details" />
      <ScrollView
        style={{
          backgroundColor: Colors.PRIMARY,
          height: device_height * 0.85,
          paddingVertical: 7,
          borderTopRightRadius: 28,
          borderTopLeftRadius: 28,
          elevation: 10,
        }}>
        <Dropdown
          items={States}
          value={state}
          label="Visiting State Name (भ्रमण राज्य का नाम)"
          toggle_open={() => set_is_state_open(!is_state_open)}
          is_open={is_state_open}
          set_value={val => set_state(val)}
          on_change={set_cities}
          z_index={10}
        />
        <Dropdown
          items={cities_group}
          value={city}
          label="Visiting City Name (भ्रमण शहर का नाम)"
          toggle_open={() => set_is_city_open(!is_city_open)}
          is_open={is_city_open}
          set_value={val => set_city(val)}
          z_index={5}
        />
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
          z_index={3}
        />
        <Input
          title="Mobile Number (मोबाइल नंबर)"
          placeholder="9999999999"
          keyboard_type="number-pad"
          value={contact_number}
          on_change={val => set_contact_number(val)}
        />
        <Dropdown
          items={TaxMode}
          value={tax_mode}
          label="Tax Mode (टैक्स मोड)"
          toggle_open={() => set_is_tax_mode_open(!is_tax_mode_open)}
          is_open={is_tax_mode_open}
          set_value={val => set_tax_mode(val)}
          z_index={2}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{width: '46%'}}>
            <Input
              title="Start Date (आरंभ तिथि)"
              placeholder="Start Date"
              value={start_date}
              disabled={true}
              on_press={() => set_show_start_date(!show_start_date)}
            />
            <InputCalendar
              visible={show_start_date}
              on_change={day => {
                set_start_date(day.dateString);
                set_show_start_date(false);
              }}
              close_calendar={() => set_show_start_date(false)}
            />
          </View>
          <View style={{width: '46%'}}>
            <Input
              title="End Date (अंतिम तिथि)"
              placeholder="End Date"
              value={end_date}
              disabled={true}
              on_press={() => set_show_end_date(!show_end_date)}
            />
            <InputCalendar
              visible={show_end_date}
              on_change={day => {
                set_end_date(day.dateString);
                set_show_end_date(false);
              }}
              close_calendar={() => set_show_end_date(false)}
            />
          </View>
        </View>
        {charges ? (
          <View style={styles.charges_container}>
            <View style={styles.charge_container}>
              <Text style={styles.charge_heading}>
                Service Charge (सेवा शुल्क)
              </Text>
              <Text style={styles.charge_value}>{charges.tax}</Text>
            </View>
            <View style={styles.charge_container}>
              <Text style={styles.charge_heading}>Tax (कर)</Text>
              <Text style={styles.charge_value}>{charges.service_charge}</Text>
            </View>
            <View style={styles.horizontal_ruler} />
            <View style={styles.charge_container}>
              <Text style={styles.charge_heading}>Total Amount (कुल राशि)</Text>
              <Text style={styles.charge_value}>{charges.total_amount}</Text>
            </View>
          </View>
        ) : null}
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

const styles = StyleSheet.create({
  charges_container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    width: device_width * 0.85,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
  },
  charge_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charge_heading: {
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    fontSize: 16,
  },
  charge_value: {
    color: Colors.PRIMARY,
    fontSize: 16,
    paddingRight: 16,
  },
  horizontal_ruler: {
    marginVertical: 5,
    borderTopColor: Colors.BLACK,
    borderTopWidth: 1,
    width: 55,
    alignSelf: 'flex-end',
  },
});

export default Form;
