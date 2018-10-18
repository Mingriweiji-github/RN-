import React, { Component } from 'react';
import { Text,View,TouchableWithoutFeedback,LayoutAnimation } from 'react-native';
import { CardSection, Card } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {tech, selectTechId} = this.props;
        if(tech.id === selectTechId){
            return (
                <CardSection>
                    <Text>
                        {tech.des}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        console.log(this.props);

        const {id,title} = this.props.tech;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectTech(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = {
    titleStyle: {
        fontSize: 18
    }
}
const mapStateToProps = (state) => {
    return {selectTechId: state.selectdTechId};
}
export default connect(mapStateToProps, actions)(ListItem);