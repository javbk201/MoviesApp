import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import MovieDetail from '../../components/MovieDatail/MovieDetail';
import useMovieDetails from '../../hooks/DetailsHooks/useMovieDetails';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { RootStackParams } from '../../Navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const screenHeight =  Dimensions.get('screen').height;

const Details = ({route, navigation}: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id);
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.borderImage}>
                    <Image 
                        source={{ uri }}
                        style={styles.posterImage} />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View>
                {
                    isLoading 
                        ? <ActivityIndicator size={35} color={'gray'} style={{ marginTop: 20 }} />
                        : <MovieDetail movieFull={movieFull} cast={cast} />
                }

            </View>
            <View style={styles.backButtom}>
                <TouchableOpacity 
                    activeOpacity={0.6}
                    onPress={() => navigation.goBack()}>
                    <Icon 
                        color={'white'}
                        name={'arrow-back'}
                        size={60}
                        />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
    imageContainer: {
        
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    borderImage:{
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer:{
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        opacity: 0.5,
        fontSize: 16
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButtom:{
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
})