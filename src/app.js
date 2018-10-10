import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './list';
import { OneProvider } from './react_one_ui';

export default class App extends React.Component {
    render() {
        return (
            <OneProvider>
                <List />
            </OneProvider>
        );
    }
}
