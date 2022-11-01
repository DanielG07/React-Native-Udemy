import React from 'react'
import { Text, View, useWindowDimensions, FlatList } from 'react-native';
import { CastElement, MovieDetail } from '../interfaces/movieInterface'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem';

interface Props {
    movieDetail: MovieDetail,
    movieCast: CastElement[]
}

export const MovieDetails = ({movieDetail, movieCast} : Props) => {


    return (
        <>
            {/* Detalles */}
            <View style={{marginHorizontal: 16}}>
                <View
                    style={{flexDirection: 'row'}}
                >
                    <Icon name='star-outline' color='gray' size={16}/>
                    <Text>{movieDetail.vote_average}</Text>

                    <Text> - {movieDetail.genres.map(g => g.name).join(', ')}</Text>
                </View>

                <Text style={{fontSize: 20, marginTop: 8, fontWeight: 'bold'}}>Historia</Text>
                <Text style={{fontSize: 16}}>{movieDetail.overview}</Text>
                
                <Text style={{fontSize: 20, marginTop: 8, fontWeight: 'bold'}}>Presupuesto</Text>
                <Text style={{fontSize: 16}}>{currencyFormatter.format(movieDetail.budget, {code: 'USD'})}</Text>
                
            </View>

            <View style={{marginTop: 8}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginStart: 16}}>Actores</Text>
                    <FlatList
                        data={movieCast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <CastItem actor={item}/>}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 4}}
                    />
                </View>
        </>
    )
}
