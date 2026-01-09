import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
  