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
   TouchableOpacity,
   View,
   TextInput
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import { useDispatch } from 'react-redux';
import { addFood } from '../actions/foodAction';
 
 const FirstScreen = ({ navigation }) => {
    const [food, setFood] = React.useState('');
    const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))
   return (
    <View style={styles.container}>

    <Text style={styles.title}>Redux</Text>
    <TextInput
      value={food}
      placeholder='Name'
      style={styles.foodInput}
      onChangeText={(food) => setFood(food)}
    />
    <TouchableOpacity
      style={{ marginBottom: 16 }}
      onPress={() => {
        submitFood(food)
        setFood('')
      }}>
      <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ marginBottom: 16 }}
      onPress={() =>
        navigation.navigate('SecondScreen')}>
      <Text style={{ fontSize: 22, color: 'white' }}>Go to FoodList</Text>
    </TouchableOpacity>
  </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 48,
      marginBottom: 30,
      marginTop: 16,
      color: 'white'
    },
    foodInput: {
      fontSize: 24,
      marginBottom: 32,
      borderWidth: 1,
      padding: 12,
      width: '80%',
      borderRadius: 10,
      backgroundColor: 'white'
    },
    image: {
      width: 120,
      height: 120,
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 100,
    }
  });
 
 export default FirstScreen;
 