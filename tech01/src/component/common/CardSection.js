import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
       borderBottomWidth:1,
       backgroundColor:'#FFF',
       padding:8,
       justifyContent:'flex-start',
       flexDirection: 'row',
       postion:'reletive',
       borderColor:'#E0E0E0'
    }
}
export default CardSection;