import { GET_POKEMONS, GET_POKEMON, REGIONS } from "./types";
import axios from "axios";
import { Dispatch } from 'redux';
import { formatName } from "../api/utils";
import { AppState } from "./reducer";

export interface pokemon {
    name: string;
    img: string;
    img2: string;
    hp: number;
    attack: number;
    defense: number;
    abilities: string[];
    moves: string[];
    id: number;
    type: string[];
  }

export interface regions {
    name: string;
    id: number;
    imgSrc?:string|null;
    imgSrc2?:string|null;
    

}

export interface pokemons{
    name: string;
    id: number;
    imgSrc?:string|null;
    imgSrc2?:string|null;
    

}

interface GetPokemonsAction {
  type: typeof GET_POKEMONS;
  payload: pokemons[];
}

interface GetPokemonAction {
  type: typeof GET_POKEMON;
  payload: pokemon;
}

interface GetRegions {
    type: typeof REGIONS;
    payload: regions[];
}

type AppAction = GetPokemonsAction | GetPokemonAction | GetRegions;


export const getPokemons = () => {
    return async(dispatch: Dispatch) => {
        try {
            const response = await axios.get("https://unpkg.com/pokemons@1.1.0/pokemons.json")
            const data = response.data;
            console.log(data);
    
            const pokemons = await data.results.map((pokemon: any) => ({
                name: formatName(pokemon.name),
                id: pokemon.national_number,
                imgSrc:`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${formatName(pokemon.name)}.png`,
                imgSrc2: `https://img.pokemondb.net/artwork/${formatName(pokemon.name)}.jpg`,
                
            }));
    
            const uniquePokemon = pokemons.filter((pokemon: any, index: number) => {
                return pokemons.findIndex((p:any)=> p.id === pokemon.id ) === index
            })
            console.log(uniquePokemon);
            
            console.log(pokemons);
            
            return dispatch({
                type: GET_POKEMONS,
                payload: uniquePokemon
            });
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const getPokemon = (name: string) => {
    return async (dispatch: Dispatch) => {
        try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = response.data;
        console.log(data);

        const pokemons: pokemon = {
            name: data.name,
            img: data.sprites.other.home.front_default,
            img2: data.sprites.other.home.front_shiny,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            abilities: [data.abilities[0].ability.name, data.abilities[1]?.ability.name],
            moves: [data.moves[0].move.name, data.moves[1]?.move.name, data.moves[2]?.move.name, data.moves[3]?.move.name, data.moves[4]?.move.name], 
            id: data.id,
            type: [data.types[0]?.type.name, data.types[1]?.type.name],
            
            
        }
        console.log(pokemons);
        
        return dispatch({
            type: GET_POKEMON,
            payload: pokemons,
        });
        
        
    } catch (error) {
        console.log(error);
        
    }
    }
    
}

export const orderRegions = (name: string) => {
    
    return async (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        console.log(name);
        
        try {
          const { pokemons } = getState();
          let filteredPokemons: pokemons[] = [];
            
            
        
          if (name === "Kanto") {
            filteredPokemons = pokemons.slice(0, 151);
          } else if (name === "Johto") {
            filteredPokemons = pokemons.slice(152, 251);
          } else if( name === "Hoenn"){
            filteredPokemons= pokemons.slice(251,386);
          } else if( name === "Sinnoh"){
            filteredPokemons= pokemons.slice(386,493);
          } else if( name === "Teselia"){
            filteredPokemons= pokemons.slice(494,649);
          } else if( name === "Kalos"){
            filteredPokemons= pokemons.slice(649,721);
          } else if( name === "Alola"){
            filteredPokemons= pokemons.slice(724,809);
          } else {
            filteredPokemons = pokemons.slice(0, 809 )
          }
          console.log(filteredPokemons);
          
          dispatch({
            type: REGIONS,
            payload: filteredPokemons,
          });
        } catch (error) {
          console.log(error);
        }
      };
}

export default AppAction;