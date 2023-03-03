import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';
import Styles from './Styles/Styles'

import ChoosePhotos from './Pages/ChoosePhoto'
import Page from './Pages/Page';
import Test from './Pages/Test';

StatusBar.setBarStyle('dark-content');

const ThemeScreen = props => {
    const [type, setType] = useState<'down' | 'up'>('down');

    const onClickButton = () => {
        if (type === 'up') {
            setType('down');
            alert('Change type curve down');
        } else {
            setType('up');
            alert('Change type curve up');
        }
    }

    const _renderIcon = (routeName: string, selectTab: string) => {
        let icon = '';

        switch (routeName) {
        case 'title1':
            icon = 'ios-home-outline';
            break;
        case 'title2':
            icon = 'apps-outline';
            break;
        case 'title3':
            icon = 'bar-chart-outline';
            break;
        case 'title4':
            icon = 'person-outline';
            break;
        }

        return (
            <Ionicons name={icon} size={23} color={routeName === selectTab ? '#FF3030' : 'gray'} />
        );
    };

    return (
        // <View style={Styles.container}>
            <CurvedBottomBar.Navigator
                style={[type === 'down' && {backgroundColor: '#F5F5F5'}]}
                type={type}
                height={60}
                circleWidth={55}
                bgColor="white"
                borderTopLeftRight={true}
                initialRouteName="title1"
                renderCircle={() => (
                    <TouchableOpacity
                        style={[type === 'down' ? Styles.btnCircle : Styles.btnCircleUp]} onPress={onClickButton}
                    >
                        <Ionicons name="chatbubbles-outline" size={23} />
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigation }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation(routeName)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {_renderIcon(routeName, selectTab)}
                    </TouchableOpacity>
                );
                }}>
                <CurvedBottomBar.Screen
                    name="title1"
                    position="left"
                    component={() =><SafeAreaView style={{ flex: 1 }}>
                                    <Page title={'This'}/>
                                </SafeAreaView> }
                />
                <CurvedBottomBar.Screen
                    name="title2"
                    component={() => <SafeAreaView style={{ flex: 1 }}>
                                      <ChoosePhotos/>
                                    </SafeAreaView>}
                    position="left"
                />
                <CurvedBottomBar.Screen
                    name="title3"
                    component={() => <SafeAreaView style={{ flex: 1 }}>
                                        <Test thing={'Nigga'}/>
                                    </SafeAreaView>}
                    position="right"
                />
                <CurvedBottomBar.Screen
                    name="title4"
                    component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
                    position="right"
                />
            </CurvedBottomBar.Navigator>
        // </View>
    );
};

export default ThemeScreen;
