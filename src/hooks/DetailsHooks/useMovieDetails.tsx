import { useEffect, useState } from "react"
import movieDB from "../../Api/movieDB";
import { Cast, CreditResponse, MovieFull } from "../../interfaces/MovieDBinterfaces"

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],

}

const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () =>{
        const getDetails = await movieDB.get<MovieFull>(`/${movieId}`);
        const getCredits = await movieDB.get<CreditResponse>(`/${movieId}/credits`);

        const response = await Promise.all([
            getDetails,
            getCredits
        ]);

        setState({
            isLoading: false,
            movieFull: response[0].data,
            cast: response[1].data.cast,
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return ({
        ...state
    })
}

export default useMovieDetails
