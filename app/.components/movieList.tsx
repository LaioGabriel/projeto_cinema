import { useMovies } from "../.hooks/useMovies";
import MovieGrid from "./movieGrid";

interface MovieListProps {
    searchQuery?: string;
    category?: string;
}

export default function MovieList({ searchQuery, category }: MovieListProps) {
    const { movies, loading, error } = useMovies(searchQuery, category);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#073175]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-red-500 gap-4">
                <p className="text-xl font-semibold">{error}</p>
                <p className="text-sm text-slate-500">Ocorreu um problema ao carregar os filmes.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <MovieGrid
                movies={movies}
                searchQuery={searchQuery}
                category={category}
            />
        </div>
    );
}
