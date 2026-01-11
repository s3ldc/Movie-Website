import "./css/App.css";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {

  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
  