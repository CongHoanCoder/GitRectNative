import React, { PureComponent } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actions/rootAction';
import { dataActionCreators } from '../state/actions/rootAction';

const HomeScreen = () => {
    const account = useSelector((state) => state.bank);
    const data = useSelector((state) => state.dataReducer);
    const accountDispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, accountDispatch);
  const dataDispatch = useDispatch();
  const { getData } = bindActionCreators(dataActionCreators, dataDispatch);
    console.log("account: "+ account);
    console.log(data);
    return ( 
        <View>
            <Text>
            {account}
            </Text>
            <View style = {{flexDirection: 'row', marginTop: 30, justifyContent: 'space-around'}}>
            <TouchableOpacity style = {{ backgroundColor: "coral"}}
             onPress= {()=> depositMoney(1000)}
              >
                <Text> Deposit </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{ backgroundColor: "green"}}
            onPress= {()=> withdrawMoney(1000)}
            >
                <Text> Withdraw </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{ backgroundColor: "blue"}}
            onPress= {()=> getData()}
            >
                <Text> GetData </Text>
            </TouchableOpacity>
            </View>
            
        </View>
     );
}
 
export default HomeScreen;
