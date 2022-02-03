/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NeuView} from 'react-native-neu-element';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eef2f9'}}>
      <View style={{flex: 1, padding: 15}}>
        {/* HEADER */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <NeuView color="#eef2f9" height={50} width={50} borderRadius={25}>
            <Feather name={'user'} size={25} color={'#fc6767'} />
          </NeuView>
          <Text style={{fontWeight: 'bold', fontSize: 30}}> Weather </Text>
          <NeuView color="#eef2f9" height={50} width={50} borderRadius={25}>
            <Ionicons name={'add-circle-outline'} size={40} color={'#fc6767'} />
          </NeuView>
        </View>
        {/* SECTION */}
        <View style={{alignSelf: 'center', marginTop: '5%'}}>
          <NeuView color="#eef2f9" height={150} width={150} borderRadius={75} concave>
            <Feather name={'sun'} size={100} color={'#fc6767'} />
          </NeuView>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default App;
