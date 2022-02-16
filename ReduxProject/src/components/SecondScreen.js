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
   FlatList,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';



 import { useDispatch, useSelector } from 'react-redux';
 
 import { deleteFood } from './actions/food';
 import { ListItem, Icon } from 'react-native-elements'
 const SecondScreen = () => {
    const foods = useSelector(state => state.foodReducer.foodList);
    console.log(foods);
   
   return (
    <FlatList style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => deleteCurrent(data.item.key)} />
            }
          />
      }
    />
   );
 };
 
 const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: '#212121',
      padding: 16
    },
    listText: {
      fontSize: 30
    },
  });
 
 export default SecondScreen;
 