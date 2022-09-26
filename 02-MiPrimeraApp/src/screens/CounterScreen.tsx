import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const CounterScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Contador: {contador}</Text>

            <TouchableOpacity
                onPress={() => setContador( contador - 1 )} 
                style={ styles.fabLocationBL }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>-1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setContador( contador + 1 )} 
                style={ styles.fabLocationBR }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>+1</Text>
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
    fabLocationBR: {
        position: 'absolute',
        bottom: 16,
        right: 16
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 16,
        left: 16
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})