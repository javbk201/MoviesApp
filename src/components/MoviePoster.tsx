import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/MovieDBinterfaces'

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export default function MoviePoster({ movie, height = 420, width = 300 }: Props ) {
    
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={{
                width,
                height,
                marginHorizontal: 8
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details' as never, movie as never) }
        >
            <View style={styles.imageContainer}> 
                <Image 
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    }
})
