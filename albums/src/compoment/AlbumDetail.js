import React from 'react';
import {Image,Text,View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
    const {image,thumbnail,title,des} = album;

    const {
        imageStyle,
        imageContainerStyle,
        thumbnailStyle,
        titleStyle,
        infoStyle,
        desStyle
    } = styles;

    return (
        <Card>
            <CardSection style={imageContainerStyle}> 
                <Image resizeMode='cover' source={{url:image}} style={imageStyle}></Image>
            </CardSection>

            <CardSection>
                <Image source={{url:thumbnail}} style={thumbnailStyle}></Image>
                <View style={infoStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text style={desStyle}>{des}</Text>
                </View>
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
    }
}
export default AlbumDetail;