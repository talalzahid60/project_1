import {View, Text, Image} from 'react-native';
import React from 'react';

import {style} from './itemStyle';
import IMG from '../assets/images/lifeboy.png';

const Item = () => {
  return (
    <View style={style.Container}>
      <View style={style.itemWrapper}>
        <Image source={IMG} />
      </View>
    </View>
  );
};
export default Item;
