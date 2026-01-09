import { IconStar, IconStarHalfFilled, IconStarFilled } from "@tabler/icons-react";
import {Movie} from "../.types/Movie";
interface StarRatingProps {
    movie: Movie;
}

export default function StarRating(props: StarRatingProps) {
    
    const rating = props.movie.vote_average / 2;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (

        <div className="flex gap-1 text-yellow-400">
           {Array.from({ length: fullStars }).map((_, index) => (
            <IconStarFilled className="size-5" key={`full-${index}`} />
           ))}
           {hasHalfStar && <IconStarHalfFilled className="size-5" />}
           {Array.from({ length: emptyStars }).map((_, index) => (
            <IconStar className="size-5 text-slate-400" key={`empty-${index}`} />
           ))}
        </div>
    );
}