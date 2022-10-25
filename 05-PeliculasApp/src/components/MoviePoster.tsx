import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie
}

export const MoviePoster = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View
            style={{
                width: 300,
                height: 420,
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image }
                    source={{
                        uri: uri
                    }}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 15,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    }
})
