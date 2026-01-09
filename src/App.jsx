import "./App.css";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
  );
}

export default App;
  