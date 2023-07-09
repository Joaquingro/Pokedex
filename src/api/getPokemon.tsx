import axios from "axios";



export const getPokemon = async (name: string) => {
    console.log(name);
    
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = response.data;
        console.log(data);

        const pokemons = {
            name: data.name,
            img: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            deffense: data.stats[2].base_stat,
        }
        console.log(pokemons);
        
        return pokemons;
        
        
    } catch (error) {
        console.log(error);
        
    }
}