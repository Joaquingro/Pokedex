import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPokemons } from "../../redux/actions";
import { AppState } from "../../redux/reducer";

export default function Pokemons({ Link }: any) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const regions = useSelector((state: AppState) => state.regions);
  
  const dispatch = useDispatch<Dispatch<any>>();

  const filteredPokemons = regions?.slice(0, 807).filter((pokemon) => {
    return pokemon.name.match(query);
  })

  useEffect(() => {
    if(filteredPokemons){
        setLoading(false);
    }
  
    
  }, [filteredPokemons])
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  
  
  
  if(!filteredPokemons){
    return <p>"No hay pokemons con ese nombre"</p>
  }
  
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
  {filteredPokemons?.map((pokemon) => (
    <Link className={style.texts} to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
      <img className={style.img} src={pokemon.imgSrc} alt="pokemon" />
    </Link>
  ))}
</nav>
    </div>
    </main>
    <Footer Link = {Link}/>

  </>
  )
}

// useEffect(() => {
//     setLoading(true);
//     const getAllPokemons = async () => {
//       const allPokemons = await getPokemons();
//       setPokemon(allPokemons);
//       console.log(pokemon);
//      setTimeout(() => {
//         setLoading(false);
//      }, 3000);
//     };
//     getAllPokemons();    
//   }, [])