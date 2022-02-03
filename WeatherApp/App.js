/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {NeuView} from 'react-native-neu-element';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [weatherInfo, setweatherInfo] = React.useState({
    currentTab: 0,
    weatherInfo: {
        location: 'Seoul, Korea',
        wind: '9 m/h',
        humidity: '69%',
        visibility: '21km',
        uv: 1,
        today: {
            weather: 'Cloudy',
            desc: 'Sunny',
            temperature: '24°c',
        },
        tomorrow: {
            weather: 'Sunny',
            desc: 'Cloudy with a chance of rain',
            temperature: '24°c',
        },
        sevenDayForcast: [
            {
                day: 'Monday',
                weather: 'Cloudy',
                temperature: '24°c',
            },
            {
                day: 'Tuesday',
                weather: 'Sunny',
                temperature: '28°c',
            },
            {
                day: 'Wednesday',
                weather: 'Cloudy',
                temperature: '21°c',
            },
            {
                day: 'Thursday',
                weather: 'Sunny',
                temperature: '25°c',
            },
            {
                day: 'Friday',
                weather: 'Cloudy',
                temperature: '21°c',
            },
            {
                day: 'Saturday',
                weather: 'Sunny',
                temperature: '28°c',
            },
            {
                day: 'Sunday',
                weather: 'Cloudy',
                temperature: '20°c',
            },
        ],
    },
});
const TabHeader = (props) => {return (
  <>
  {weatherInfo.currentTab === props.currentTab? (<TouchableOpacity>
    <NeuView color="#eef2f9" height={45} width={props.width} borderRadius={20} concave>
      <Text style ={{fontWeight:"bold", fontSize: 18, color: "#ec008c"}}> {props.text} </Text>
  </NeuView>
  </TouchableOpacity>):(
    <TouchableOpacity onPress={()=> setweatherInfo({...weatherInfo, currentTab: props.currentTab})}>
    <NeuView color="#eef2f9" height={45} width={props.width} borderRadius={20} concave>
      <Text style ={{fontWeight:"bold", fontSize: 18, color: "gray"}}> {props.text} </Text>
  </NeuView>
  </TouchableOpacity>
  )}
  
  </>
  
  
);}

const TabContent = (props) => {
  return (
      <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'grey', fontWeight: '600', textAlign: 'center'}}>{props.weatherInfo.desc}</Text>
          <Feather
              name={props.weatherInfo.weather == 'Sunny' ? 'sun' : 'cloud-drizzle'}
              size={50}
              color={props.weatherInfo.weather == 'Sunny' ? '#fc6767' : '#ec008c'}
              style={{marginVertical: 20}}
          />
          <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>{props.weatherInfo.temperature}</Text>
      </View>
  );
};

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
            <View style ={{marginLeft: 2}}>
            <Ionicons name={'add-circle-outline'} size={40} color={'#fc6767'} />
            </View>
            
          </NeuView>
        </View>
        {/* SECTION 1 */}
        <View style={{alignSelf: 'center', marginTop: '5%'}}>
          <NeuView color="#eef2f9" height={150} width={150} borderRadius={75} concave>
            <Feather name={'sun'} size={100} color={'#fc6767'} />
          </NeuView>
        </View>

        {/* SECTION 2 */}
        <View style= {{alignSelf: "center", alignItems: "center", marginTop: "5%"}}>
          <Text style ={{fontWeight:"bold", fontSize: 20, color: "black"}}> {weatherInfo.weatherInfo.today.temperature}</Text>
          <Text style ={{fontWeight:"500", fontSize: 20}}> {weatherInfo.weatherInfo.location}</Text>
        </View>
        {/* SECTION 3 */}
        <View style= {{width: "100%", flexDirection: "row", justifyContent:"space-between", alignItems: "center", marginTop: "5%"}}>
        
          <TabHeader text = {"Today"} width = {80} currentTab ={0}/>
          <TabHeader text = {"Tomorrow"} width = {110} currentTab ={1}/>
          <TabHeader text = {"7 days Forcast"} width = {140} currentTab ={2}/>
        </View>
        {/* SECTION 4 */}
        <View style={{alignSelf: 'center', marginTop: '5%', alignItems: 'center'}}>
        <NeuView color={'#eef2f9'} height={220} width={180} borderRadius={40} concave>
            {weatherInfo.currentTab == 0 && <TabContent weatherInfo={weatherInfo.weatherInfo.today} />}
            {weatherInfo.currentTab == 1 && <TabContent weatherInfo={weatherInfo.weatherInfo.tomorrow} />}
            {weatherInfo.currentTab == 2 && (
                                <View>
                                    {weatherInfo.weatherInfo.sevenDayForcast.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={{
                                                    paddingHorizontal: 20,
                                                    flexDirection: 'row',
                                                    width: 180,
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginBottom: 8,
                                                }}>
                                                <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>{item.day.substr(0, 3)}.</Text>
                                                <Text style={{fontSize: 14, color: 'grey'}}>{item.temperature}.</Text>
                                                <Feather
                                                    name={item.weather == 'Sunny' ? 'sun' : 'cloud-drizzle'}
                                                    size={15}
                                                    color={item.weather == 'Sunny' ? '#fc6767' : '#ec008c'}
                                                />
                                            </View>
                                        );
                                    })}
                                </View>
                            )}
         </NeuView>
        </View>
       {/* SECTION 5 */}
       <View style={{width: '100%', marginTop: '5%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>Additional Info</Text>
                        <View style={{width: '100%', flexDirection: 'row', height: 40, marginTop: '1%'}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt, color: 'black'}}>Wind</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {weatherInfo.weatherInfo.wind}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt, color: 'black'}}>Humidity</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {weatherInfo.weatherInfo.humidity}</Text>
                            </View>
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', height: 40}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt,color: 'black'}}>Visibility</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {weatherInfo.weatherInfo.visibility}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt,color: 'black'}}>UV</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {weatherInfo.weatherInfo.uv}</Text>
                            </View>
                        </View>
                    </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  addnInfoTxt: {
      fontWeight: 'bold',
      fontSize: 16,
      flex: 1,
  },
});


export default App;
