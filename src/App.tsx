import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Pokemon, Pokemons } from './pages';
import Landing from './pages/Landing/Landing';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing Link = {Link} />} />
        <Route path="/pokemons" element={<Pokemons  />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
