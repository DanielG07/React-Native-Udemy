import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { CastElement } from '../interfaces/movieInterface'

interface Props {
    actor: CastElement
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`


    return (
        <View style={styles.container}>

            {actor.profile_path && (<Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}}/>)}

            <View style={{paddingHorizontal: 8, paddingVertical: 4}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
                <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginLeft: 16,
    }
})
