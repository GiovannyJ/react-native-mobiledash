import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

import styles from "../Styles/Styles";
import Button from '../components/Button'
import React from "react";

const PlaceHolderImage = require('./../img/turkey.png')

const ChoosePhotos = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image source={PlaceHolderImage} style={styles.image}/>
            </View>
            <StatusBar style="auto"/>
            <View style={styles.footerContainer}>
                <Button label="Press me" theme="primary"/>
            </View>
        </View>
    );
};

export default ChoosePhotos;