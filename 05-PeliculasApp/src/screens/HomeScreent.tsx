import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreent = ({ navigation, route }: Props) => {

    const { moviesNow, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()
    
    console.log(moviesNow[3]?.title)

    if(isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator color='red' size={ 100 }/>
            </View>
        )
    }

    return (
        <View
            style={{
                marginTop: top
            }}
        >
            <MoviePoster
                movie={ moviesNow[0] }
            />
        </View>
    )
}
