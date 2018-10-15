import React, {Component} from 'react';
import {View,ScrollView, Text} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = { albums: [] };

    componentWillMount() {
        fetch('https://5bc05e9759c0e1001337f2a4.mockapi.io/api/list')
        .then(res => res.json())
        .then(responseJson => this.setState({albums: responseJson}))
        .catch(err => {
            console.log(err);
        })
    }

    renderDetail() {
        return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {
        console.log(this.state.albums.map((album => console.log(album))));
        return (
            <ScrollView> 
                {/* renderDetail()//错误演示-ScrollView中调用JS方法,{this.renderDetail()} */}
                {this.renderDetail()}
                <View style={{paddingBottom:8}}></View>
            </ScrollView>
        )
    }

}

export default AlbumList;