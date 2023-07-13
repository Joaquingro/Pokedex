import axios from "axios";



export const getPokemon = async (name: string) => {
    console.log(name);
    
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = response.data;
        console.log(data);

        const pokemons = {
            name: data.name,
            img: data.sprites.other.home.front_default,
            img2: data.sprites.other.home.front_shiny,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            deffense: data.stats[2].base_stat,
            abilities: [data.abilities[0].ability.name, data.abilities[1]?.ability.name],
            moves: [data.moves[0].move.name, data.moves[1].move.name, data.moves[2].move.name, data.moves[3].move.name, data.moves[4].move.name], 
            id: data.id,
            
        }
        console.log(pokemons);
        
        return pokemons;
        
        
    } catch (error) {
        console.log(error);
        
    }
}