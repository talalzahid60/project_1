import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import serchic from '../assets/images/search_icon.png';

const Search = () => {
  return (
    <View style={{backgroundColor: '#e8edef', flex: 1}}>
      <View
        style={{
          marginTop: 10,
          width: '90%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor={'grey'}
          backgroundColor={'#fff'}
          borderRadius={10}
          textAlign={'center'}
        />
      </View>
    </View>
  );
};
export default Search;
