import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from '../Screens/Home';
import AllCategories from '../Screens/AllCategories';
import Search from '../Screens/Search';
import Cart from '../Screens/Cart';
import Account from '../Screens/Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? 'green' : 'black',
                  }}
                  source={require('../assets/images/home_icon.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={AllCategories}
          name="Categories"
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? 'green' : 'black',
                  }}
                  source={require('../assets/images/cat_icon.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={Cart}
          name="Cart"
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 43,
                    height: 43,
                    tintColor: focused ? 'green' : 'black',
                  }}
                  source={require('../assets/images/cart_icon.png')}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          component={Search}
          name="Search"
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? 'green' : 'black',
                  }}
                  source={require('../assets/images/search_icon.png')}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={Account}
          name="Account"
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 33,
                    height: 33,
                    tintColor: focused ? 'green' : 'black',
                  }}
                  source={require('../assets/images/account_icon.png')}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
