import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState, useRef } from "react";
import Categories from "../../components/Categories/Categories";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getIdPokemon, getPokemons } from "../../redux/actions";
import { AppState } from "../../redux/reducer";
import pikachu from "../../assets/pikachu.gif";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pokemons() {
  
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const pokemons = useSelector((state: AppState) => state.pokemons);
  const regions = useSelector((state: AppState) => state.regions);
  const id = useSelector((state: AppState) => state.id);
  const selectedPokemonRef = useRef<HTMLAnchorElement | null>(null);
  const dispatch = useDispatch<Dispatch<any>>();
  console.log(regions);
  
  const filteredPokemons = pokemons?.slice(0, 721).filter((pokemon) => {
    return pokemon.name.match(query.toLocaleLowerCase());
  })
  console.log(filteredPokemons);
  console.log(id);
  


  useEffect(() => {
    if(regions){
        setLoading(false);
    }    
  }, [regions])

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getIdPokemon());
  }, [])
  


useEffect(() => {
  if (id && filteredPokemons.length > 0 && selectedPokemonRef.current) {
    selectedPokemonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}, [id, filteredPokemons]);


if(loading){
  return <Loading/>
}

return (
  <>
    <Header query={query} setQuery={setQuery}/>
    <main className={style.main}>
      <Categories/>
    <div className={style.containerFather}>
    <nav className={style.container}>
      
    {query.length ? (
  
  filteredPokemons.map(pokemon => (
   
      <NavLink 
      key={pokemon.id}
      className={style.texts} 
      to={`/pokemons/${pokemon.name}`}>
        <img
          className={style.img}
          src={pokemon.imgSrc ?? pokemon.imgSrc2 ?? ''}
          alt="pokemon"
        />
      </NavLink>
    
  ))
) : (
  
  regions?.map(pokemon => ( 
    <Link
      key={pokemon.id}
      className={style.texts}
      to={`/pokemons/${pokemon.name}`}
      ref={id == pokemon.id ? selectedPokemonRef : null}
    >
      <img
        className={style.img}
        src={pokemon.imgSrc ?? pokemon.imgSrc2 ?? ''}
        alt="pokemon"
      />
    </Link>
  ))
)}

  {filteredPokemons.length === 0 && 
    <div className={style.notFound}>
      <p>There are not pokemons with that name...</p>
      <img src={pikachu} alt="noFound"/>
    </div>
    }
</nav>
    </div>
    </main>
    <Footer/>

  </>
  )
}
