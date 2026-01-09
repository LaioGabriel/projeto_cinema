'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { Movie } from "../.types/Movie";
import Card from "./card";


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                language: 'pt-BR'
            }
        }).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        console.log(movies),
        <div className="flex justify-center">

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {movies.map((movie) => (
                    <Card
                        key={movie.id}
                        movie={movie}

                    />
                ))}

            </div>
        </div>
    );

}