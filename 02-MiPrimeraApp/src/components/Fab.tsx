import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void, 
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  return (
    <TouchableOpacity 
        onPress={ onPress  } 
        style={ styles.fabLocationBR }
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>{ title }</Text>
            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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