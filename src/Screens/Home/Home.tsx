import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors'
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../../components/GradientBackground/GradientBackground';
import { HorizontalSlider } from '../../components/HorizontalSlider.tsx/HorizontalSlider';
import MoviePoster from '../../components/MoviePoster';
import { useMovies } from '../../hooks/HomeHooks/useMovies'
import { getImageColors } from '../../helpers/GetColors';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPostercolors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const [primaryColor, secondaryColor] = await getImageColors(uri)
    }

    if (isLoading){
       return(
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <ActivityIndicator color='red' size={100} />
           </View>
       )
    }

    return (
        <GradientBackground>
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
                        onSnapToItem={ index => getPostercolors(index)}
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
        </GradientBackground>
    )
}
 
export default Home;