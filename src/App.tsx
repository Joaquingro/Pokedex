import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';
import Landing from './pages/Landing/Landing';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing Link = {Link} />} />
        <Route path="/items" element={<Items/>} />
        <Route path="/pokemons" element={<Pokemons Link={Link} />} />
        <Route path="/pokemons/:name" element={<Pokemon Link = {Link} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
