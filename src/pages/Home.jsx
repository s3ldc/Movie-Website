import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Inception", release_date: "2010" },
    { id: 2, title: "The Matrix", release_date: "1999" },
    { id: 3, title: "Interstellar", release_date: "2014" },
    { id: 4, title: "The Dark Knight", release_date: "2008" },
    { id: 5, title: "Pulp Fiction", release_date: "1994" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-from">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
