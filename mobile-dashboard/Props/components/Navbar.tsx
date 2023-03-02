import {BottomTabs} from 'rn-animated-tabbar';
import { View } from 'react-native-ui-lib';
import {Image } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const icon = require('./../img/icon.svg')
const ICON = () =>{
  return(
    <Image source={icon}/>
  )
}
const TabsNavigator = () => {


    const navigateToScreen = (navigation: any, screen: string) => {
        // Here you can call your navigation method, for example:
        navigation.navigate(screen);
    }
    
    return(
        <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, backgroundColor: '#513070', paddingBottom: 16}}>
            <Image source={icon}/>
            <BottomTabs 
                tabsData={BottomTabsData} 
                tabBarBackground="#513070"
                activeTabBackground="#FFFFFF"
                textColor="#FFFFFF"
                navigationHandler={(screen: string) => { 
                    navigateToScreen(Stack, screen)
                }}
            />
        </View>
    );
};
const BottomTabsData = [
    {
      id: 'currency-tab',
      title: 'Currency',
      icon: ICON,
      activeIcon: ICON,
    },
    {
      id: 'converter-tab',
      title: 'Converter',
      icon: "Converter",
      activeIcon: "ConverterLG",
    },
    {
      id: 'gold-tab',
      title: 'Gold',
      icon: "Gold",
      activeIcon: "GoldLg",
    },
    {
      id: 'settings-tab',
      title: 'Settings',
      icon: "Settings",
      activeIcon: "SettingsLG",
    },
  ];


export default TabsNavigator;