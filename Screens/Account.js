import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from '../assets/images/noti_icon.png';
import arrow from '../assets/images/right_icon.png';
import Suggest from '../assets/images/suggest_icon.png';
import Help from '../assets/images/help.png';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';
import Cart from './Cart';
import Notifications from './Notifications';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen component={Account} name="Account" />
    <Stack.Screen component={LoginScreen} name="LoginScreen" />
    <Stack.Screen component={Notifications} name="Notifications" />
  </Stack.Navigator>
</NavigationContainer>;

const Account = ({navigation}) => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,

            color: 'black',
          }}>
          Welcome
        </Text>

        <View
          style={{
            backgroundColor: 'green',
            width: '92%',
            height: 50,

            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 18,
                marginTop: 10,
              }}>
              Login/SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* views for tabs */}
      {/* Notifications tab */}
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '92%',
            height: 50,
            borderRadius: 10,

            marginTop: 15,
            alignSelf: 'center',
          }}>
          <Image
            style={{height: 25, width: 25, tintColor: 'green', marginLeft: 10}}
            source={Icon}
          />
          <Text style={{fontSize: 16, marginLeft: 18}}>Notifications</Text>
          <View>
            <Image
              style={{
                height: 25,
                width: 25,
                marginLeft: '66%',
                tintColor: 'grey',
              }}
              source={arrow}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* suggest product tab */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          width: '92%',
          height: 50,
          borderRadius: 10,

          marginTop: 15,
          alignSelf: 'center',
        }}>
        <Image
          style={{height: 30, width: 30, tintColor: 'green', marginLeft: 10}}
          source={Suggest}
        />
        <Text style={{fontSize: 16, marginLeft: 15}}>Suggest Product</Text>
        <View>
          <Image
            style={{
              height: 25,
              width: 25,
              marginLeft: '60%',
              tintColor: 'grey',
            }}
            source={arrow}
          />
        </View>
      </View>
      {/* help and support tab */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          width: '92%',
          height: 50,
          borderRadius: 10,

          marginTop: 15,
          alignSelf: 'center',
        }}>
        <Image
          style={{height: 25, width: 25, tintColor: 'green', marginLeft: 10}}
          source={Help}
        />
        <Text style={{fontSize: 16, marginLeft: 20}}>Help & Support</Text>
        <View>
          <Image
            style={{
              height: 25,
              width: 25,
              marginLeft: '62.5%',
              tintColor: 'grey',
            }}
            source={arrow}
          />
        </View>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: '50%',
          backgroundColor: 'green',
          width: '92%',
          height: 50,
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 18,
          borderRadius: 10,
        }}>
        Call to customer Support
      </Text>
    </View>
  );
};

export default Account;
