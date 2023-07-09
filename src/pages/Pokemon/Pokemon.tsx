import { useParams } from "react-router-dom";
import style from "../Pokemon/Pokemon.module.css";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api/getPokemon";
export default function Pokemon() {
  const {name} = useParams();
  const [pokemon, setPokemon] = useState<{
    name: string;
    img: string;
    hp: number;
    attack: number;
    deffense: number;
  } | null>(null);
  
  console.log(name);
  console.log(pokemon);
  

useEffect(() => {
  const onePokemon = async () => {
    if(name){
      const pokemonSelected: any = await getPokemon(name.toLocaleLowerCase());
      setPokemon(pokemonSelected);

    }
  }
  onePokemon();
}, [name])

  return (
    <div className={style.pokemon}>
      {pokemon && (
      <div>
      <img src={pokemon.img}/>
      <p>{pokemon.name}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.deffense}</p>
      </div>
      )} 
      

    </div>
  )
}
