import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState } from "react";
import { useParams } from'react-router';
import { getPokemons } from "../../api/fetchPokemon";

export default function Pokemons({ Link }: any) {
  const {name} = useParams();
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<{ name: string; id: number; imgSrc: string; }[]>([]);



useEffect(() => {
    const getAllPokemons = async () => {
      const allPokemons = await getPokemons();
      setPokemon(allPokemons);
      console.log(pokemon);
      
    };
    getAllPokemons();    
  }, [])
  return (
  <>
    <Header query={query} setQuery={setQuery}/>
    <main className={style.main}>
      
    <nav className={style.container}>
  {pokemon?.slice(0, 151).map((pokemon) => (
    <Link className={style.texts} to={`/pokemon/${pokemon.name.toLocaleLowerCase()}`} key={pokemon.id}>
        <span>{pokemon.id}</span>
      <img src={pokemon.imgSrc} alt="pokemon" />
      <div className={style.spans}>
        <span>{pokemon.name}</span>
      </div>
    </Link>
  ))}
</nav>
    </main>
    <Footer Link = {Link}/>

  </>
  )
}
