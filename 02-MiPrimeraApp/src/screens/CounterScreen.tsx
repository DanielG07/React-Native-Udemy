import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const CounterScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Contador: {contador}</Text>

            <TouchableOpacity
                onPress={() => setContador( contador + 1 )} 
            >
                <View style={ styles.buttonIncrement }>
                    <Text>Click me!!!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    buttonIncrement: {
        backgroundColor:  'red',
        borderRadius: 100
    }
})