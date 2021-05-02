import React from 'react';
import {
    Text, 
    StyleSheet, 
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface EnviromenteButtonProps extends RectButton {
    title: string;
    active?: boolean;
}

export function EnviromenteButton({ 
    title,
    active = false,
    ...rest 

} : EnviromenteButtonProps) {
    return (
        <RectButton
            style = {[
                styles.container,
                active && styles.containerActive
            ]}
            { ...rest }
        >
            <Text style = {[
                styles.text,
                active && styles.textActive
            ]}>
                { title }
            </Text>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    containerActive: {
        backgroundColor: colors.green_light,
    },
    text: {
        fontSize: 16,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },
})