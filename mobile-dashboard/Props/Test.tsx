import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card } from 'react-native-ui-lib';
import styles from './Styles/Styles'
interface TestProps{
    thing: string
}

const Test: React.FC<TestProps> = ({thing}) =>{
    return(
        <View style={styles.center}>
            <Text style={styles.input}>
                YO YO {thing}
            </Text>
        </View>
    );
};

export default Test;