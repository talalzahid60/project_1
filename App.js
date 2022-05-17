import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Item from './Screens/item';
import Icon from 'react-native-vector-icons/Ionicons';

import AllCategories from './Screens/AllCategories';
import TabNavigation from './Navigations/TabNavigation';

export default function App() {
  return <TabNavigation />;
}
