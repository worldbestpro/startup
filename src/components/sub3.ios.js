import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import { Colors, Device, FontSize, PaddingSize } from '../lib/device-info';


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

class Sub extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImage} source={require('../assets/logo-couple.png')} />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerLeftContainer}>
                            <Text style={styles.headerName}>Fly Moon Royalty</Text>
                        </View>
                        <View style={styles.headerRightContainer}>
                            <Text style={styles.headerLocation}>Seattle, WA</Text>
                        </View>
                    </View>

                    <View style={styles.descContainer}>
                        <View style={styles.descControlContainer}>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.followBtnContainer}>
                                    <Text style={styles.followBtnText}>+ edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.row, {alignItems: 'center', justifyContent: 'flex-end'}]}>
                                <TouchableOpacity style={[styles.circleButton, {marginRight: 10}]}>
                                <Icon name="camera" size={15} color={Colors.mediumGreyColor} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.circleButton, {marginRight: 10}]}>
                                <Icon name="soundcloud" size={15} color={Colors.mediumGreyColor} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.circleButton}>
                                <Icon name="facebook" size={15} color={Colors.mediumGreyColor} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.descTextContainer}>
                            <Text style={styles.descText}>When it came time to make the fourth Telekinesis album, drummer/songwriter/principal architect Michael Benjamin Lerner found himself in a...</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>more</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.column}>
                        <TouchableOpacity style={styles.settingsRow}>
                            <View style={[styles.row, {alignItems: 'center'}]}>
                                <Image style={styles.rectImage} source={require('../assets/fans.png')} />
                                <Text style={styles.settingsText}>Fans (321)</Text>
                            </View>
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                                <Image style={[styles.circleImage, {marginRight: 10}]} source={require('../assets/woman.png')} />
                                <Image style={[styles.circleImage, {marginRight: 10}]} source={require('../assets/woman.png')} />
                                <Image style={styles.circleImage} source={require('../assets/woman.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <View style={[styles.row, {alignItems: 'center'}]}>
                                <Image style={styles.rectImage} source={require('../assets/fanmixes.png')} />
                                <Text style={styles.settingsText}>Fan Remixes (19)</Text>
                            </View>
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                                <Image style={[styles.circleImage, {marginRight: 10}]} source={require('../assets/woman.png')} />
                                <Image style={[styles.circleImage, {marginRight: 10}]} source={require('../assets/woman.png')} />
                                <Image style={styles.circleImage} source={require('../assets/woman.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <View style={[styles.row, {alignItems: 'center'}]}>
                                <Image style={styles.rectImage} source={require('../assets/songs.png')} />
                                <Text style={styles.settingsText}>Songs</Text>
                            </View>
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                                <Image style={styles.rectImage} source={require('../assets/man.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsRow}>
                            <View style={[styles.row, {alignItems: 'center'}]}>
                                <Image style={styles.rectImage} source={require('../assets/record.png')} />
                                <Text style={styles.settingsText}>Record Label</Text>
                            </View>
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                                <Image style={styles.rectImage} source={require('../assets/recordlabel.png')} />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.white,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    logoImage: {
        resizeMode: 'contain',
        width: Device.width,
        height: Device.height / 4,
    },
    infoContainer: {
        flex: 3,
        flexDirection: 'column',
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    headerLeftContainer: {
        flex: 3,
        flexDirection: 'row',
    },
    headerName: {
        color: 'white',
        paddingBottom: PaddingSize.size10,
        paddingLeft: PaddingSize.size20,
        paddingTop: PaddingSize.size10,
        fontSize: FontSize.size20,
    },
    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLocation: {
        color: 'white',
        fontSize: FontSize.size14,
        fontStyle: 'italic',
    },
    descContainer: {
        backgroundColor: 'white',
        borderBottomColor: Colors.brightGreyColor,
        borderBottomWidth: 1,
        flexDirection: 'column',
        paddingLeft: PaddingSize.size20,
        paddingRight: PaddingSize.size20,
    },
    descControlContainer: {
        paddingBottom: PaddingSize.size10,
        paddingTop: PaddingSize.size10,
        flexDirection: 'row',
    },
    followBtnContainer: {
        alignItems: 'center',
        borderColor: Colors.darkGreyColor,
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: PaddingSize.size5,
        paddingTop: PaddingSize.size5,
    },
    followBtnText: {
        color: Colors.black,
        fontSize: FontSize.size18,
    },
    circleButton: {
        alignItems: 'center',
        borderColor: Colors.mediumGreyColor,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        width: 30,
        height: 30,
    },
    descTextContainer: {
        paddingBottom: PaddingSize.size10,
        paddingTop: PaddingSize.size10,
    },
    descText: {
        fontSize: FontSize.size14,
    },
    moreText: {
        fontSize: FontSize.size14,
        fontWeight: 'bold',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    settingsRow: {
        backgroundColor: Colors.white,
        borderBottomColor: Colors.brightGreyColor,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingLeft: PaddingSize.size20,
        paddingRight: PaddingSize.size20,
        paddingBottom: PaddingSize.size10,
        paddingTop: PaddingSize.size10,
    },
    settingsText: {
        color: Colors.darkGreyColor,
        fontSize: FontSize.size16,
    },
    rectImage: {
        resizeMode: 'stretch',
        width: 40,
        height: 40,
    },
    circleImage: {
        borderRadius: 20,
        resizeMode: 'stretch',
        width: 40,
        height: 40,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sub);
