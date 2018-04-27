import React from 'react';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers';
import HomeScreen from './src/screens/HomeScreen';

import { configPlatformItems } from './lib';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {

    constructor(){
        super();
        configPlatformItems(AsyncStorage);
    }

    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        );
    }
};
