import React, {Component} from 'react';
import {View } from 'react-native';
import {connect} from 'react-redux';

class TechList extends Component {
    render () {
        return <View />
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {techs:state.techs};
}
export default connect(mapStateToProps)(TechList);