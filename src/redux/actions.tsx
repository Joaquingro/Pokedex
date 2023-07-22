import { GET_POKEMONS, GET_POKEMON } from "./types";
import axios from "axios";
import { Dispatch } from 'redux';
import { formatName } from "../api/utils";

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


export interface pokemons{
    name: string;
    id: number;
    imgSrc?:string|null;
}

interface GetPokemonsAction {
  type: typeof GET_POKEMONS;
  payload: pokemons[];
}

interface GetPokemonAction {
  type: typeof GET_POKEMON;
  payload: pokemon;
}

type AppAction = GetPokemonsAction | GetPokemonAction;


export const getPokemons = () => {
    return async(dispatch: Dispatch) => {
        try {
            const response = await axios.get("https://unpkg.com/pokemons@1.1.0/pokemons.json")
            const data = response.data;
            console.log(data);
    
            const pokemons = await data.results.map((pokemon: any) => ({
                name: formatName(pokemon.name),
                id: pokemon.national_number,
                imgSrc:`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name.toLocaleLowerCase()}.png`,
                imgSrc2: pokemon.sprites.large,
                
            }));
    
            const uniquePokemon = pokemons.filter((pokemon: any, index: number) => {
                return pokemons.findIndex((p:any)=> p.id === pokemon.id ) === index
            })
            
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

export default AppAction;