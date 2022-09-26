import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export const CounterScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 30,
            }}>Contador: {contador}</Text>

            <TouchableOpacity
                onPress={() => setContador( contador + 1 )} 
            >
                <View style={{
                    backgroundColor: 'red',
                    borderRadius: 100
                }}>
                    <Text>Click me!!!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
