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

export default function Pokemons({ Link }: any) {
  
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const pokemons = useSelector((state: AppState) => state.pokemons);
  const regions = useSelector((state: AppState) => state.regions);
  const id = useSelector((state: AppState) => state.id);
  const pokemonRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<Dispatch<any>>();
  console.log(regions);
  
  const filteredPokemons = pokemons?.slice(0, 721).filter((pokemon) => {
    return pokemon.name.match(query);
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
    if (id && filteredPokemons.length > 0 && pokemonRef.current) {
      // Encontrar el Pokémon con el id buscado
      const scrollPokemon = filteredPokemons.find(pokemon => pokemon.id == id);
      console.log(scrollPokemon);
      if (scrollPokemon) {
        // Buscar el elemento que corresponde al Pokémon buscado en la lista de enlaces
        const pokemonElement = pokemonRef.current.querySelector(`[data-pokemon-id="${id}"]`);
            console.log(pokemonElement);
            
        if (pokemonElement) {
          // Realizar scroll hacia el elemento encontrado
          pokemonElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    }
  }, [id, filteredPokemons]);
    

  
  console.log(pokemonRef);


  
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
  {query.length ? filteredPokemons.map((pokemon) => (
    <Link 
    ref={pokemonRef} 
    className={style.texts} 
    to={`/pokemons/${pokemon.name}`} 
    key={pokemon.id}
    data-pokemon-id={pokemon.id}>
      <img
        className={style.img}
        src={pokemon.imgSrc ?? pokemon.imgSrc2 ?? 'ruta-por-defecto.png'}
        alt="pokemon"
      />
     
    </Link>
  )) : regions?.map((pokemon) => (
    <Link 
    ref={ pokemonRef } 
    className={style.texts} 
    to={`/pokemons/${pokemon.name}`} 
    key={pokemon.id}
    data-pokemon-id={pokemon.id}>

      <img
        className={style.img}
        src={pokemon.imgSrc ?? pokemon.imgSrc2 ?? 'ruta-por-defecto.png'}
        alt="pokemon"
      />
     
    </Link>
  ))}
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
