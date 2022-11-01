import React from 'react'
import { Image, Text, View, StyleSheet, useWindowDimensions, ActivityIndicatorComponent, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({navigation, route}: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {height} = useWindowDimensions()

    const {isLoading, movieDetail, cast} = useMovieDetail(movie.id)
    const {bottom, top} = useSafeAreaInsets()

    return (
        <ScrollView>
            <View
                style={{
                    ...styles.container,
                    marginBottom: bottom
                }}
            >
                <View style={{
                    ...styles.imageContainer,
                    height: height * 0.7
                    }}>
                    <Image 
                        source={{uri}}
                        style={styles.posterImage}/>
                </View>
                
                <View style={styles.marginContainer}>
                    <Text style={styles.subtitle}>{movie.original_title}</Text>
                    <Text style={styles.title}>{movie.title}</Text>
                </View>

                {(isLoading) ? (
                    <ActivityIndicator size={35} color={'red'} style={{marginTop: 20}}/>
                ) : (
                    <MovieDetails movieDetail={movieDetail!} movieCast={cast}/>
                )}
                
            </View>

            <View style={{...styles.backButton, top: top}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrow-back-outline' color='red' size={40}/>
                </TouchableOpacity>
            </View>
            
            
            
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    posterImage: {
        flex: 1,
        
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    marginContainer: {
        marginHorizontal: 16,
        marginTop: 16
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        left: 16
    }
})
