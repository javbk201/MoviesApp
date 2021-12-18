import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Cast, MovieFull } from '../../interfaces/MovieDBinterfaces'

interface Props {
    movieFull?: MovieFull,
    cast: Cast[]
}

const MovieDetail = ({ movieFull, cast }: Props) => {
    return (
        <View>
            <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star' size={20} color='gray' />
                    <Text style={{ fontSize: 16, opacity: 0.7 }} >{movieFull?.vote_average}</Text>
                    <Text style={{ marginLeft: 5, fontSize: 16, opacity: 0.7 }}>
                        - {movieFull?.genres.map((item) => item.name).join(', ') }
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MovieDetail
