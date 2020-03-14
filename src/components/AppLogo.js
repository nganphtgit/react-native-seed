import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class AppLogo extends Component {
    render() {
        return (
            <Avatar
                size="large"
                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'none'}}
                activeOpacity={0.7}
            />
        );
    }
}

const styles = StyleSheet.create({
    avatar: {

    }
});
