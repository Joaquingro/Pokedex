import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons Link = {Link} />} />
        <Route path="/items" element={<Items/>} />
        <Route path="/pokemons" element={<Pokemons Link={Link} />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
