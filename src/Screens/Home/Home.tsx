import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../../components/HorizontalSlider.tsx/HorizontalSlider';
import MoviePoster from '../../components/MoviePoster';
import { useMovies } from '../../hooks/HomeHooks/useMovies'

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading){
       return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <ActivityIndicator color='red' size={100} />
           </View>
       )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* Carrusel principal */}
                <View style={{ height: 460 }}>
                <Carousel 
                    data={nowPlaying!}
                    renderItem={({ item }: any) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300} 
                    inactiveSlideOpacity={0.9}
                    />
                    
                </View>
                {/* Peliculas populares */}
                <HorizontalSlider title={'Populares'} movies={popular} />
                {/* Peliculas top rated */}
                <HorizontalSlider title={'Mejor Calificados'} movies={topRated} />
                {/* Peliculas upcoming */}
                <HorizontalSlider title={'Proximamente'} movies={upcoming} />
            </View>
        </ScrollView>
    )
}
 
export default Home;