import React from 'react';
import {Image,Text,View,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {image,thumbnail,title,des,link} = album;

    const {
        imageStyle,
        imageContainerStyle,
        thumbnailStyle,
        titleStyle,
        infoStyle,
        desStyle,
        buttonContainerStyle
    } = styles;

    return (
        <Card>
            <CardSection style={imageContainerStyle}> 
                <Image resizeMode='cover' source={{url:image}} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Image source={{url:thumbnail}} style={thumbnailStyle} />
                <View style={infoStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text style={desStyle}>{des}</Text>
                </View>
            </CardSection>
            <CardSection style= {buttonContainerStyle}>
                <Button onPress={() => {
                    Linking.openURL(link)
                }}> 全部购买 </Button>
            </CardSection>

        </Card>
    )
}
const styles = {
    imageStyle: {
        flex:1,
        height:300,
    },
    imageContainerStyle: {
        padding:0,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        overflow:'hidden',
    },
    thumbnailStyle: {
        width:48,
        height:48,
        marginRight:8,
        borderRadius:3,
    },
    titleStyle: {
        fontSize:18,
        fontWeight:'600',
        marginBottom:6
    },
    des: {
        fontSize:13
    },
    infoStyle: {
        flex:1,
        marginBottom:6,
    },
    buttonContainerStyle: {
        justifyContent:'center',
        alignItems:'center',
    }
}
export default AlbumDetail;