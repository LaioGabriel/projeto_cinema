
import Navbar from "./.components/navbar";
import MovieList from "./.components/movieList";



export default function Home() {

  return (
    <main className="min-h-screen">  
    <Navbar title="Cineminha" />
    <MovieList />
    </main>
  );
}
