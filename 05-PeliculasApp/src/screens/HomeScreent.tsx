import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, ScrollView, useWindowDimensions, View } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { RootStackParams } from '../navigation/Navigation';
import { getImageColors } from '../helpers/getColors';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreent = ({ navigation, route }: Props) => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies()
    const { top, bottom} = useSafeAreaInsets()
    const { width, height } = useWindowDimensions()

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [primary, secondary] = await getImageColors(uri)
        console.log(primary + ' - ' + secondary)
    }

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
        <GradientBackground>
            <ScrollView>
                <View
                    style={{
                        marginTop: top + 20,
                        marginBottom: bottom
                    }}
                >
                    {/* <MoviePoster
                        movie={ moviesNow[0] }
                    /> */}

                    <View
                        style={{
                            height: height * 0.35
                        }}
                    >

                        <Carousel
                            data={ nowPlaying }
                            renderItem={ ({item, index}: any) => (
                                <MoviePoster 
                                    movie={ item }
                                    width={width * 0.45}
                                    height={height * 0.31}
                                />
                            )}
                            sliderWidth={ width }
                            itemWidth={ width * 0.45 }
                            inactiveSlideOpacity={ 0.9 }
                            onSnapToItem={index => getPosterColors(index)}
                        />

                    </View>

                    <HorizontalSlider
                        title='Peliculas Populares'
                        movies={ popular }
                    />

                    <HorizontalSlider
                        title='Peliculas Mejor Calificadas'
                        movies={ topRated }
                    />

                    <HorizontalSlider
                        title='Proximas Peliculas'
                        movies={ upComing }
                    />
                    
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
