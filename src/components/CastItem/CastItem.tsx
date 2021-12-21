import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Cast } from '../../interfaces/MovieDBinterfaces'

interface Props{
    actor: Cast

}

const CastItem = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path 
                && 
                <Image
                    source={{ uri }}
                    style={styles.image} />
            }
            <View style={styles.actorInfo}>
                <Text style={styles.actorName}> { actor.name } </Text>
                <Text style={styles.actorCharacter}> { actor.character } </Text>
            </View>
        </View>
    )
}

export default CastItem


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        height: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginRight: 25,
        paddingRight: 5,
        
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 10
    },
    actorName: { 
        fontWeight: 'bold', 
        fontSize: 18 
    },
    actorCharacter:{
        fontSize: 18,
        opacity: 0.7
    },
    actorInfo:{
        marginLeft: 10,
        marginTop: 5
    }
})