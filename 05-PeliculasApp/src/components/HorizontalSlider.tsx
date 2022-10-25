import React from 'react'
import { FlatList, Text, useWindowDimensions, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string,
    movies: Movie[],

}

export const HorizontalSlider = ({title, movies}: Props) => {

    const { width, height } = useWindowDimensions()

    return (
        <View
            style={{
                marginVertical: 8
            }}
        >
            {
                title 
                && (
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginHorizontal: 8
                    }}
                >{title}</Text>
            )}
            
            <FlatList
                data={ movies }
                renderItem={ ({item, index}: any) => (
                    <MoviePoster 
                        movie={ item }
                        width={width * 0.45 * 4 / 5 }
                        height={height * 0.31 * 4 / 5}
                    />
                )}
                keyExtractor={(item, index) => item.id.toString() }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
