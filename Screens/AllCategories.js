import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {style} from './AllCategoriesStyle';
import CategoryData from '../Data/CategoryData';
import PopularItems from '../Data/PopularItems';
import Banner from '../assets/images/banner.jpg';
import Item from './item';

const renderCatItem = ({item}) => {
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
};

const AllCategories = () => {
  return (
    <ScrollView>
      <View style={style.Container}>
        <View>
          <Image style={style.Banner} source={Banner} />
        </View>
        <View style={style.titleAndViewAll}>
          <Text style={style.catTitle}>All Categories</Text>
        </View>
        <View style={style.catWrapper}>
          <FlatList
            data={CategoryData}
            renderItem={renderCatItem}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default AllCategories;
// export default MyStack;
