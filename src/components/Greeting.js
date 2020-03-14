import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <Text style={styles.greeting}>Hello World</Text>
        );
    }
}

const styles = StyleSheet.create({
    greeting: {
        alignSelf: 'stretch',
        alignItems: 'center',
        textAlign: 'center'
    },
});