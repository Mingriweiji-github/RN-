 import React from 'react';
 import {Text,View} from 'react-native';

 const Header = (props) => {
    const {textStyle,viewStyle} = styles;

     return (
         <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>
         </View>
     )
 }

 const styles = {
     textStyle: {
         fontSize:20
     },
     viewStyle: {
         backgroudColor:'#dddddd',
         height:64,
         justifyConment:'center',
         alignItems:'center',
         paddingTop:15,
         shadowColor:'#000', 
         shadowOffset:{width:0,height:2},
         shadowOpacity:0.3,
         position:'relative'
     }
 }
 export default Header;