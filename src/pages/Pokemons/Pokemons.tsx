import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState } from "react";
import { getPokemons } from "../../api/getPokemons";

export default function Pokemons({ Link }: any) {
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

const filteredPokemons = pokemon?.slice(0, 151).filter((pokemon) => {
  return pokemon.name.match(query);
})

  return (
  <>
    <Header query={query} setQuery={setQuery}/>
    <main className={style.main}>
      
    <nav className={style.container}>
  {filteredPokemons?.slice(0, 151).map((pokemon) => (
    <Link className={style.texts} to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
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
