/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-27
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    PixelRatio,
    Platform
} from 'react-native';
import FontSize from '../component/TextSize';
import Colors from '../component/Colors';

let {height, width} = Dimensions.get('window');

// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 常用颜色
global.COLORS = Colors;
// 适配字体
global.FONT_SIZE = FontSize;
// 用户登录状态
global.TOKEN = false;
// TabBarIcon图标大小
global.TabBarIcon = {
    width: 35,
    height: 35,
};



