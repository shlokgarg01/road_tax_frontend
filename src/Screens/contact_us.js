import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';

const ContactUs = () => {
  useEffect(() => Linking.openURL('whatsapp://send?phone=918708387087'), []);
  return null;
};

export default ContactUs;
