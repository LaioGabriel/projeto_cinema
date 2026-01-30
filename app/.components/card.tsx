import { IconRating18Plus, IconEye } from "@tabler/icons-react";
import { Movie } from "../.types/Movie";
import StarRating from "./starRating";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
    movie: Movie;
}

export default function Card({ movie }: CardProps) {
    const isMature =
        movie.adult ||
        movie.title.toLowerCase().includes('tons de cinza') ||
        movie.title.toLowerCase().includes('Cinquenta Tons') ||
        movie.title.includes('365') ||
        movie.overview.toLowerCase().includes('erótico') ||
        movie.overview.toLowerCase().includes('sensual');

    const [isBlurred, setIsBlurred] = useState(isMature);

    return (
        <div className="w-full">
            <div
                className="relative group overflow-hidden rounded-xl bg-slate-800 aspect-2/3 cursor-pointer"
                onClick={() => setIsBlurred(false)}
            >
                <Image
                    className={`object-cover transition-all duration-700 ${isBlurred ? 'blur-3xl scale-125' : 'group-hover:scale-110'}`}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Informativo (Sinopse e +18) */}
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300 flex flex-col justify-center items-center p-6 ${isBlurred ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                    <p className="text-white text-sm text-center line-clamp-6 leading-relaxed">
                        {movie.overview}
                    </p>
                    {isMature && (
                        <div className="mt-4 p-2 bg-red-600 rounded-lg text-white">
                            <IconRating18Plus size={24} />
                        </div>
                    )}
                </div>

                {isBlurred && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md z-10 transition-opacity duration-500">
                        <div className="bg-red-600/20 p-4 rounded-full mb-3 border border-red-500/50">
                            <IconRating18Plus size={40} className="text-red-500" />
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                            <IconEye size={18} className="text-white" />
                            <span className="text-white text-xs font-bold uppercase tracking-wider">Ver Conteúdo</span>
                        </div>
                    </div>
                )}
            </div>

            <h2 className="text-lg font-semibold mt-3 text-slate-100 line-clamp-1">{movie.title}</h2>
            <StarRating movie={movie} />
        </div>
    );
}