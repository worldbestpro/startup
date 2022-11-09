import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';
import { Colors, Device, FontSize } from '../lib/device-info';


// map redux store to props
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

// map actions to props
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            Auth: bindActionCreators(AuthAction, dispatch),
        }
    }
}

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => Actions.sub()}>
                    <Text style={styles.text}>Annalisa Giangregorio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Actions.sub1()}>
                    <Text style={styles.text}>Annalisa Giangregorio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Actions.sub2()}>
                    <Text style={styles.text}>Telekinesis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Actions.sub3()}>
                    <Text style={styles.text}>Fly Moon Royalty</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Device.width,
        height: Device.height,
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: 250,
        height: 60,
    },
    text: {
        fontSize: FontSize.size20
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
