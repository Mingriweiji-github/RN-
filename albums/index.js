/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React,{Component} from 'react';
import {Text,View, AppRegistry} from 'react-native';
import Header from './src/compoment/Header';
import AlbumList from './src/compoment/AlbumList';

const App = () => {
        return (
            <View style={{flex:1}}>
                <Header headerText='专辑'/>
                <AlbumList />
            </View>
        )
}

AppRegistry.registerComponent('albums',() => App);
