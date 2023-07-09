import axios from "axios"


export const getPokemons = async () => {
    
    try {
        const response = await axios.get("https://unpkg.com/pokemons@1.1.0/pokemons.json")
        const data = response.data;
        console.log(data);

        const pokemons = await data.results.map((pokemon: any) => ({
            name: pokemon.name,
            id: pokemon.national_number,
            imgSrc: pokemon.sprites.animated,
            
        }));

        const uniquePokemon = pokemons.filter((pokemon: any, index: number) => {
            return pokemons.findIndex((p:any)=> p.id === pokemon.id ) === index
        })
        
        return uniquePokemon;
    } catch (error) {
        console.log(error);
        
    }
}