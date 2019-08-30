/**
 * Created by jason .
 */
import React from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Splash from '../Components/Splash';
import StatusBarIOS from '../Components/StatusBarIOS';


class App extends React.Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Text>react-native测试</Text>
                <StatusBarIOS barStyle="default"/>

                {/* StackNavigator({
                    // 默认显示界面，在这里默认显示StackNavigatorOne组件
                    initialRouteName: 'Splash',
                    initialRouteParams: { // 初始化路由的参数
                        params: 'first page is StackNavigatorOne'
                    },
                    paths: { component: Splash },
                    // 用于覆盖RouteConfigs中设置的path的一个映射
                    navigationOptions: {
                        title: 'RN测试',
                    },
                    mode: "card",
                    headerMode: 'float',
                    onTransitionStart: () => { console.log('导航栏切换开始'); }, // 回调
                    onTransitionEnd: () => { console.log('导航栏切换结束'); } // 回调
                }) */}
            </View>
        )
    }
}

export default App;