import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import LottieView from 'lottie-react-native'


export function History(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>History</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',

    },
    texto:{
        fontSize:15
    }
})