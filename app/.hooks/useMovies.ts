import { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../.types/Movie";

interface MovieParams {
  api_key: string | undefined;
  language: string;
  query?: string;
  include_adult: boolean;
}

export function useMovies(searchQuery?: string, category: string = "popular") {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

      if (!apiKey) {
        setError("A chave da API não foi configurada corretamente.");
        setLoading(false);
        return;
      }

      let url = `https://api.themoviedb.org/3/movie/${category}`;
      const params: MovieParams = {
        api_key: apiKey,
        language: "pt-BR",
        include_adult: true,
      };

      if (searchQuery) {
        url = "https://api.themoviedb.org/3/search/movie";
        params.query = searchQuery;
      } else if (category === "popular") {
        url = "https://api.themoviedb.org/3/discover/movie";
      }

      try {
        const response = await axios.get(url, { params });
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          setMovies([]);
        }
      } catch {
        setError("Não foi possível carregar os filmes no momento.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, category]);

  return { movies, loading, error };
}
