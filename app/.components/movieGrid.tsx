import { Movie } from "../.types/Movie";
import Card from "./card";

interface MovieGridProps {
    movies: Movie[];
    searchQuery?: string;
    category?: string;
}

export default function MovieGrid({ movies, searchQuery, category }: MovieGridProps) {
    if (movies.length === 0) {
        return (
            <div className="text-slate-500 mt-10 text-lg italic">
                Nenhum filme encontrado para &quot;{searchQuery || category}&quot;.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 w-full max-w-7xl">
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
