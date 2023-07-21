import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState } from "react";
// import { getPokemons } from "../../api/getPokemons";
import Categories from "../../components/Categories/Categories";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPokemons } from "../../redux/actions";
import { AppState } from "../../redux/reducer";

export default function Pokemons({ Link }: any) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const pokemons = useSelector((state: AppState) => state.pokemons);
  console.log(pokemons);
  
  const dispatch = useDispatch<Dispatch<any>>();

  const filteredPokemons = pokemons?.slice(0, 1008).filter((pokemon) => {
    return pokemon.name.match(query);
  })

  useEffect(() => {
    if(filteredPokemons.length>0){
        setLoading(false);
    }
  
    
  }, [filteredPokemons])
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  
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
    <Categories Link= {Link}/>
    {/* <div className={style.kanto}>
      <h2>Kanto</h2>
    </div> */}
    <nav className={style.container}>
  {filteredPokemons?.slice(0, 1008).map((pokemon) => (
    <Link className={style.texts} to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
      <img className={style.img} src={pokemon.imgSrc} alt="pokemon" />
    </Link>
  ))}
</nav>
    </main>
    <Footer Link = {Link}/>

  </>
  )
}
