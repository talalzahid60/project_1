import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CartImg from '../assets/images/empty_cart.png';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
const Stack = createStackNavigator();
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen component={Home} name="Home" />
  </Stack.Navigator>
</NavigationContainer>;

const Cart = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
      <Image
        style={{height: 80, width: 80, tintColor: 'red'}}
        source={CartImg}
      />
      <Text style={{fontSize: 18, marginTop: 10}}>
        No Items in your Cart Yet
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            borderRadius: 5,
            fontSize: 18,
            marginTop: 10,
            backgroundColor: 'green',
            height: 50,
            width: 280,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            textAlignVertical: 'center',
          }}>
          Start Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;
