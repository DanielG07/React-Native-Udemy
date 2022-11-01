import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
    movie: Movie,
    width: number,
    height: number
}

export const MoviePoster = ({movie, width, height}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={{
                width: width,
                height: height,
                marginHorizontal: 5,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailScreen', movie)}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image }
                    source={{
                        uri: uri
                    }}
                />
            </View>
            
        </TouchableOpacity>
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
