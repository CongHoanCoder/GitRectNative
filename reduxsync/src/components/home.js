import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { DataActions } from '../state/actions/rootAction';
const Home = () => {
    const data = useSelector((state) => state.DataReducer);
    const dataDispatch = useDispatch();
    const {getData} = bindActionCreators(DataActions,dataDispatch);

    console.log(data);
    useEffect(()=>{
        getData();

    },[]);
    return ( 
        <div className="Home">  
            <text> welcome to my home </text>
        </div>
     );
}
 
export default Home;