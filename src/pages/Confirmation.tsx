import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,

} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect')
    }
    return(
        <SafeAreaView style = { styles.container }>
              <View style = { styles.content }>
                    <Text style = { styles.emoji }>
                        😄
                    </Text>

                    <Text style = { styles.title}>
                        Prontinho
                    </Text>

                    <Text style = {styles.subtitle}>
                        Agora vamos começar a cuidar das suas {'\n'}
                        plantinas com muito cuidado.
                    </Text>
                        
                    <View style = { styles.footer }>
                        <Button
                            title = "Começar"
                            onPress = { handleMoveOn }
                        />
                    </View>
                </View>
                    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,
    },
    emoji: {
        fontSize: 78  ,
    },
    footer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50,
          
    }
    

});