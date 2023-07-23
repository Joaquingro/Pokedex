import { Reducer } from 'redux';
import AppAction, { pokemon, pokemons, regions } from './actions';
import { GET_POKEMON, GET_POKEMONS, REGIONS } from './types';

export interface AppState {
    pokemons: pokemons[];
    pokemon: pokemon;
    regions: regions[];
  }
  

  const initialState: AppState = {
    regions: [],
    pokemons: [],
    pokemon: { 
    name: '', 
    img: '', 
    img2: '', 
    hp: 0, 
    attack: 0, 
    defense: 0, 
    abilities: [], 
    moves: [], 
    id: 0, 
    type: []
    },
  
  };
  

const appReducer: Reducer<AppState, AppAction> = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            };

        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            };
    
        case REGIONS:
           
              return{
                  ...state,
                  regions: action.payload,
              };
            
           
            
        default:
            return state;
    }
}

export default appReducer;