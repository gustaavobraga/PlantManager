import React from 'react';
import {
    Text, 
    StyleSheet, 
    View,
    Image,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/user.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Header(){
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.greeting}>Olá, </Text>
                <Text style = {styles.userName}>Rodrigo</Text>
            </View>
            <Image source={userImg} style = {styles.image}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingVertical: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.heading,
        lineHeight: 40,
    }

})