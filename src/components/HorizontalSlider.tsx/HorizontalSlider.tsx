import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Movie } from '../../interfaces/MovieDBinterfaces'
import MoviePoster from '../MoviePoster'

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies}: Props) => {
    return (
        <View style={styles(title).container}>
            {title && <Text style={styles(title).text}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = (title: string | undefined) => StyleSheet.create({
    container: {
        height: (title) ? 260 : 220,
        marginTop: 20
    },
    text: {
        fontSize: 30, fontWeight: 'bold', marginLeft: 10
    }
})