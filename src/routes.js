import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Form from './Screens/form';
import PaymentSuccessful from './Screens/payment_successful';
import {Colors} from './Utils/colors';
import Splash from './Screens/splash';
import RoadTax from './Screens/road_tax';
import CancellationRefund from './Screens/cancellation_refund';
import TermsAndConditions from './Screens/terms_and_conditions';
import PrivacyPolicy from './Screens/privacy_policy';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Linking, View} from 'react-native';
import Share from 'react-native-share';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawerContent(props) {
  const share_app = () => {
    const options = {
      message:
        'ऐप्प डाउनलोड करें और अपना रोड / बॉर्डर टैक्स 2 मिनट में भरें. डाउनलोड ऐप्प लिंक - ',
      url: 'https://play.google.com/store/apps/details?id=com.road_tax',
    };

    Share.open(options)
      .then(res => console.log('App Shared successfully'))
      .catch(err => console.log('Error while sharing the App', err));
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        <DrawerItem
          label="Contact Us"
          onPress={() => Linking.openURL('whatsapp://send?phone=918708387087')}
          style={{flex: 1, justifyContent: 'flex-end'}}
        />
      </View>
      <View>
        <DrawerItem
          label="Share App"
          onPress={share_app}
          style={{flex: 1, justifyContent: 'flex-end'}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerStyle: {backgroundColor: Colors.PRIMARY},
        headerTitleStyle: {color: Colors.WHITE},
        headerTitleAlign: 'center',
      }}
      drawerContent={props => <AppDrawerContent {...props} />}>
      <Drawer.Screen
        options={{headerTitle: 'Road Tax Seva', drawerLabel: 'Home'}}
        name="home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Cancellation & Refund',
          drawerLabel: 'Cancellation & Refund',
        }}
        name="cancellation"
        component={CancellationRefund}
      />
      <Drawer.Screen
        options={{
          headerTitle: 'Terms & Conditions',
          drawerLabel: 'Terms & Conditions',
        }}
        name="terms_and_conditions"
        component={TermsAndConditions}
      />
      <Drawer.Screen
        options={{headerTitle: 'Privacy Policy', drawerLabel: 'Privacy Policy'}}
        name="privacy_policy"
        component={PrivacyPolicy}
      />
    </Drawer.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={DrawerRoutes}
          options={{headerTitle: 'Road Tax Seva'}}
        />
        <Stack.Screen
          name="road_tax"
          component={RoadTax}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="form"
          component={Form}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="payment_successful"
          component={PaymentSuccessful}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
