import React from 'react'
import { View, Text, FlatList } from 'react-native'
import currencyFormatter from 'currency-formatter'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Cast, MovieFull } from '../../interfaces/MovieDBinterfaces'
import CastItem from '../CastItem/CastItem'

interface Props {
    movieFull?: MovieFull,
    cast: Cast[]
}

const MovieDetail = ({ movieFull, cast }: Props) => {
    return (
        <View>
            {/* Detalle */}
            <View style={{ marginHorizontal: 20, justifyContent: 'center' }} >
                <View style={{ flexDirection: 'row' }} >
                    <Icon name='star' size={20} color='gray' />
                    <Text style={{ fontSize: 16, opacity: 0.7 }} >
                        { movieFull?.vote_average }
                    </Text>
                    <Text style={{ marginLeft: 5, fontSize: 16, opacity: 0.7 }} >
                        - { movieFull?.genres.map((item) => item.name).join(', ') }
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{ fontSize: 25, marginTop: 20, fontWeight: 'bold' }}>Historia</Text>
                <Text style={{ fontSize: 16 }}> { movieFull?.overview } </Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                <Text style={{ fontWeight: 'bold'}}>{currencyFormatter.format(movieFull?.budget, {code:'USD'}) }</Text>
                
                {/* Casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Actores</Text>
                    <FlatList 
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={ ({item}) => <CastItem actor={item}/>}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 100 }}/>

                </View>

            </View>
        </View>
    )
}

export default MovieDetail
