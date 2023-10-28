import React from 'react';
import {View, Image, Linking, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Btn from '../Components/button';
import {Colors} from '../Utils/colors';
import {useNavigation} from '@react-navigation/native';
import {device_height} from '../Components/dimensions';

const Home = () => {
  const navigation = useNavigation();

  const images = [
    require('../../assets/image8.jpeg'),
    require('../../assets/image9.jpeg'),
    require('../../assets/image7.png'),
    require('../../assets/image13.jpeg'),
  ];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        height: device_height - 50,
      }}>
      <SliderBox
        ImageComponentStyle={{
          borderRadius: 15,
          width: '95%',
          height: 190,
        }}
        autoplay={true}
        autoplayInterval={2000}
        circleLoop={true}
        images={images}
        resizeMode="cover"
        sliderBoxHeight={230}
        onCurrentImagePressed={() =>
          Linking.openURL('whatsapp://send?phone=918708387087')
        }
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image
          source={require('../../assets/home_page.gif')}
          style={{height: 220, width: 220}}
        />
        <Btn
          title="Road Tax (पथ कर)"
          btn_color={Colors.PRIMARY}
          text_color={Colors.WHITE}
          btn_handler={() =>
            navigation.navigate('road_tax', {tax_type: 'road_tax'})
          }
        />
        <Btn
          title="Border Tax (सीमा कर)"
          btn_color={Colors.WHITE}
          text_color={Colors.PRIMARY}
          btn_handler={() =>
            navigation.navigate('form', {tax_type: 'border_tax'})
          }
        />
        <Btn
          title="Need Help? (मदद?)"
          btn_color={Colors.PRIMARY}
          text_color={Colors.WHITE}
          btn_handler={() => Linking.openURL('whatsapp://send?phone=918708387087')}
          is_need_help={true}
        />
      </View>
      <Text style={{textAlign: 'center', color: 'black', marginTop: 0}}>
        Crafted with ❤️ by Krishna Motors
      </Text>
    </View>
  );
};

export default Home;
