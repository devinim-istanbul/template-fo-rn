import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import actions from '../redux/actions';

class HomeScreen extends React.Component {

    changeUser = () => {
        this.props.login('secilc', AsyncStorage);
    };

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>User {this.props.user}</Text>
                <Button title={'Change User'} onPress={this.changeUser} />
            </View>
        )
    }
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
};

const mapStateToProps = ({ sessionStore }) => {
    const { user } = sessionStore;
    return { user };
};

export default connect(mapStateToProps,{
    login: actions.login
})(HomeScreen);
