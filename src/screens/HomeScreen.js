import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../redux/actions';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Denemeeeeeee {this.props.user}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = ({ sessionStore }) => {
    const { user } = sessionStore;
    return { user };
};

export default connect(mapStateToProps,{
    login
})(HomeScreen);
