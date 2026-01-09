
import { IconRating18Plus } from "@tabler/icons-react";
import { Movie } from "../.types/Movie";
import StarRating from "./starRating";

interface CardProps {
    movie: Movie;
}

export default function Card({ movie }: CardProps) {
    return (
        <div className="max-w-100">
            <div className="relative group">
                <img
                    className="rounded-lg object-cover w-100 h-170"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center p-4">
                    <p className="text-white text-sm text-center overflow-y-auto max-h-full scrollbar-hide">{movie.overview}</p>
                    {movie.adult && <div className="mt-2 text-white"><IconRating18Plus /></div>}
                </div>
            </div>

            <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
            <StarRating movie={movie} />
        </div>
    );
}