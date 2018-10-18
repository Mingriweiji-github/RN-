import React, { Component } from 'react';
import { View, ListView,Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class TechList extends Component {
    componentWillMount() {

        const ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 != r2
        });
        //数据绑定
        this.dataSource = ds.cloneWithRows(this.props.techs);

        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.props.techs),
        // };

    }
    //数据渲染
    renderRow(tech) {
        return <ListItem tech={tech} />
    }

    render() {
        return (
            <View>
                <ListView 
                    dataSource = {this.dataSource}
                    renderRow = {this.renderRow}
                />
                {/* <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}</Text>}
                /> */}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { techs: state.techs };
}

export default connect(mapStateToProps)(TechList);


