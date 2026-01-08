import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {

  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (<MovieCard movie={{title: "Avengers: End Game", release_date: "2019"}}/>) : <MovieCard movie={{title: "Dunes", release_date: "2025"}}/>}
    </>
  );
}

export default App;
  