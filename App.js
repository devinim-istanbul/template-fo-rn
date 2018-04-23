import React from 'react';
import { View, Text } from 'react-native';
import ServeMe from "./src";
//import reducers from 'serveme-fo-core';

export default class App extends React.Component {
    render2(){
        return <View><Text>Test</Text></View>
    }

    render() {
        //console.log(reducers);
        return (
            <ServeMe/>
        );
    }

};
