import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import AppLogo from 'components/AppLogo';
import Greeting from 'components/Greeting';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppLogo/>
                <Greeting/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
});