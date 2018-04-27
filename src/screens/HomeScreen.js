import React from 'react';
import { View, Text, Button, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import actions from 'src/redux/actions';

class HomeScreen extends React.Component {

    state = { user: '' };

    changeUser = (name) => {
        this.props.login({ name });
    };

    loadAsyncUser = async() => {
        const user = await AsyncStorage.getItem('@ServeMe:user') ;
        console.log(user);
    };

    render() {
        const { name } = this.props.user;

        return (
            <View style={styles.container}>
                <TextInput onChangeText={this.changeUser}/>
                <Text>User: {name}</Text>
                <Text>Async User: {this.state.user}</Text>
                <Button title={'Change User'} onPress={() => this.changeUser('dincozdemir')} />
                <Button title={'Change Async User'} onPress={() => this.loadAsyncUser()} />
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
