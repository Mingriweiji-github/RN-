/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React,{Component} from 'react';
import {Text , AppRegistry} from 'react-native';
import Header from './src/compoment/Header';

class App extends Component {
    componentWillMount() {
        fetch('https://5bc05e9759c0e1001337f2a4.mockapi.io/api/list')
        .then(res => res.json())
        .then(responseJson => console.log(responseJson))
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        debugger
        return <Header headerText='专辑'/>
    }
}

AppRegistry.registerComponent('albums',() => App);
