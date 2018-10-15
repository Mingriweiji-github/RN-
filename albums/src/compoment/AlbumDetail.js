import React from 'react';
import {Image,Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection style={styles.imageContainerStyle}> 
                <Image resizeMode='cover' soure={{url:props.album.image}} style={styles.imageStyle}></Image>
            </CardSection>
            <CardSection>
                <Text>{props.album.title}</Text>
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
        
    }
}
export default AlbumDetail;