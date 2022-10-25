import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie,
    width: number,
    height: number
}

export const MoviePoster = ({movie, width, height}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View
            style={{
                width: width,
                height: height,
                marginHorizontal: 5
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
        borderRadius: 15
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

        elevation: 5
    }
})
