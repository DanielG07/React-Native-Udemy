import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreent = ({ navigation, route }: Props) => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies()
    const { top, bottom} = useSafeAreaInsets()
    const { width, height } = useWindowDimensions()

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
        
    )
}
