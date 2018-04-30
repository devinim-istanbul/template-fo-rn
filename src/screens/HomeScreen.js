import React from 'react';
import { View, Text, Button, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import actions from '../redux/actions';

class HomeScreen extends React.Component {

    state = { user: '' };

    changeUser = (name) => {
        this.props.login({ name });
    };

    loadAsyncUser = async() => {
        const user = await AsyncStorage.getItem('@Template:user') ;
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
                <Modal>
                    <View style={{ flex: 1 }}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
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
