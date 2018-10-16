import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    )
}
const styles = {
    containerStyle: {
       borderWidth:1,
       borderRadius:2,
       borderColor:'#E0E0E0',
       shadowColor:'#000',
       shdowOffset:{width : 0,height:2},
       shdowOpacity:0.2,
       marginLeft:8,
       marginRight:8,
       elevation:1,
    }
}

export default Card;