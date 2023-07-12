import { useParams } from "react-router-dom";
import style from "../Pokemon/Pokemon.module.css";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api/getPokemon";
export default function Pokemon({Link}: any) {
  const {name} = useParams();
  const [pokemon, setPokemon] = useState<{
    name: string;
    img: string;
    img2: string;
    hp: number;
    attack: number;
    deffense: number;
    abilities: string;
    moves: string;
    id: number, 
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
    
    <div className={style.container}>
      {pokemon && (
      <div className={style.pokemon}>
      <img src={pokemon.img}/>
      <div className={style.info}>
        <p>Nombre: {name}</p>
        <p>Id: {pokemon.id}</p>
        <p>Ataque: {pokemon.attack}</p>
        <p>Defensa: {pokemon.deffense}</p>
        <p>Movimientos:</p><p>{pokemon.moves}</p>
        <p>Habilidades:</p><p>{pokemon.abilities}</p>
        <p></p>
      </div>
      
      </div>
      )} 
      <Link to = "/pokemons">
              <button type="button" className="btn btn-outline-danger">Regresar</button>
      </Link>

    </div>
  )
}
