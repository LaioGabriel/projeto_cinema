
export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    rating: number;
}

interface CardProps {
    movie: Movie;
}

export default function Card({ movie }: CardProps) {
    return (
        <div className="w-80">
            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>{movie.rating}</p>
            <p>{movie.overview}</p>
        </div>
    );
}