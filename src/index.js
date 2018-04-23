import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';
import HomeScreen from './screens/HomeScreen';

const store = createStore(reducers, {});

export default class ServeMe extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        );
    }
};
