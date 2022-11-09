import {
    Dimensions,
    PixelRatio,
} from 'react-native'

const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;
const Is4S = DeviceHeight <= 480;
const Is5OrLess = DeviceHeight <= 568;
const IsSmallDevice = DeviceWidth < 360;

const Device = {
    is4s: DeviceHeight <= 480,
    is5orless: DeviceHeight <=568,
    isSmallDevice: DeviceWidth < 360,
    width: DeviceWidth,
    height: DeviceHeight,
}
const PaddingSize = {
    size5: IsSmallDevice ? 5 : 5,
    size10: IsSmallDevice ? 5 : 10,
    size20: IsSmallDevice ? 10 : 20,
    size30: IsSmallDevice ? 15 : 30,
}
const FontSize = {
    size12: IsSmallDevice ? 10 : 12,
    size14: IsSmallDevice ? 12 : 14,
    size16: IsSmallDevice ? 14 : 16,
    size18: IsSmallDevice ? 16 : 18,
    size20: IsSmallDevice ? 18 : 20,
    size22: IsSmallDevice ? 20 : 22,
    size24: IsSmallDevice ? 22 : 24,
    size26: IsSmallDevice ? 24 : 26,
    size28: IsSmallDevice ? 26 : 28,
    size30: IsSmallDevice ? 28 : 30,
    size34: IsSmallDevice ? 32 : 34,
}
const Colors = {
    black: '#000',
    blue: '#0f0',
    brightGreyColor: '#c9c9c9',
    mediumGreyColor: '#969696',
    darkGreyColor: '#626262',
    white: '#fff',
}

export { Colors, Device, FontSize, PaddingSize };
