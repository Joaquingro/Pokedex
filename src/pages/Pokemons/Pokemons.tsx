import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useEffect, useState } from "react";
import { getPokemons } from "../../api/getPokemons";
import Categories from "../../components/Categories/Categories";

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
    <Categories Link= {Link}/>
    <div className={style.kanto}>
      <h2>Kanto</h2>
    </div>
    <nav className={style.container}>
  {filteredPokemons?.slice(0, 151).map((pokemon) => (
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
