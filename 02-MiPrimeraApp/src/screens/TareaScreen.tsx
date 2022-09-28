import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada }/>
        <View style={ styles.cajaNaranja }/>
        <View style={ styles.cajaAzul }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between'
    },
    cajaMorada: {
        flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
})
