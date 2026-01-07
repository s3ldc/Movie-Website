import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{title: "Avengers: End Game", release_date: "2019"}}/>
    </>
  );
}

export default App;
  