import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {style} from './HomeStyle';
import CategoryData from '../Data/CategoryData';
import PopularItems from '../Data/PopularItems';
import Banner from '../assets/images/banner.jpg';
import Item from './item';
import Account from './Account';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Item} name="Item" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const renderCatItem = ({item}) => {
//   return (
//     <View style={style.catWrapper}>
//       <View style={style.item}>
//         <Image style={style.catImg} source={item.Image} />
//         <Text numberOfLines={1} style={style.catName}>
//           {item.name}
//         </Text>
//       </View>
//     </View>
//   );
// };

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.Container}>
        <View>
          <Image style={style.Banner} source={Banner} />
        </View>
        <View style={style.titleAndViewAll}>
          <Text style={style.catTitle}>Shop By Category</Text>
          <Text style={style.viewAllTitle}>View All</Text>
        </View>
        <View style={style.catWrapper}>
          <FlatList
            data={CategoryData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={style.catWrapper}>
                  <View style={style.item}>
                    <Image style={style.catImg} source={item.Image} />
                    <Text numberOfLines={1} style={style.catName}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* PopularItems start code */}
        <View style={style.popularTextHeader}>
          <Text style={style.PopularText}>Popular Items</Text>
        </View>

        <View>
          <FlatList
            data={PopularItems}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Item')}>
                  <View style={style.PopularItemWrapper}>
                    {/* <TouchableOpacity> */}
                    <View style={style.saleAndDiscount}>
                      <Text style={style.saleText}>SALE 10%</Text>
                    </View>
                    <View style={style.ImgAndName}>
                      <Image style={style.PopularImg} source={item.Image} />
                      <Text style={style.pItemPrice}>Rs {item.price}</Text>
                      <Text numberOfLines={3} style={style.pItemName}>
                        {item.name}
                      </Text>
                    </View>
                    {/* </TouchableOpacity> */}

                    <View style={style.addToCartBtn}>
                      <Text style={style.cartBtn}>Add to cart</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;

// export default MyStack;
