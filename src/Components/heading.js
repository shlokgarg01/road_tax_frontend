import {Text} from 'react-native';
import React from 'react';

const Heading = ({title}) => {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
      }}>
      {title}
    </Text>
  );
};

export default Heading;
