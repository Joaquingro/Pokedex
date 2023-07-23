import { useParams } from "react-router-dom";
import style from "../Pokemon/Pokemon.module.css";
import { useEffect, useState } from "react";
import pokeball from "../../assets/pokeball2.png"
// import { getPokemon } from "../../api/getPokemon";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions";
import { Dispatch } from "redux";
import { AppState } from "../../redux/reducer";
import { formatName } from "../../api/utils";
interface MyComponentProps {
  Link: React.ComponentType<any>;
}

 const Pokemon: React.FC<MyComponentProps> = ({Link} ) =>  {
  const dispatch = useDispatch<Dispatch<any>>();
  const [shiny, setShiny] = useState(false);
  const {name} = useParams();
  const pokemon = useSelector((state: AppState) => state.pokemon);
  console.log(pokemon);
  
  // const [pokemon, setPokemon] = useState<{
  //   name: string;
  //   img: string;
  //   img2: string;
  //   hp: number;
  //   attack: number;
  //   defense: number;
  //   abilities: Array<[]>;
  //   moves: Array<[]>;
  //   id: number, 
  //   type: Array<[]>, 
  // } | null>(null);
  
  console.log(name);
  
  
  const handleClick = () => {
    setShiny(!shiny);
  }  

  useEffect(() => {
    const fetchPokemon = async () => {
      if (name) {
        await dispatch(getPokemon(formatName(name.toLocaleLowerCase())));
      }
    }
  
    fetchPokemon();
  }, [name]);
  



  // useEffect(() => {
  //   const onePokemon = async () => {
  //     if(name){
  //       const pokemonSelected: any = await getPokemon(name.toLocaleLowerCase());
  //       setPokemon(pokemonSelected);
        
        
  //     }
  //   }
  //   onePokemon();
  // }, [name])

  const maxHP = 150;
  
  return (
    
    <div className={style.container}>
        <Link  className={style.span} to = "/pokemons">
              <img className= {style.back} src={pokeball}/>
              <span>Back</span>
      </Link>
    
      {pokemon && (
      <div className={style.pokemon}>
      
      <div className={style.buttons}>
       
      <img src={shiny ? pokemon.img2 : pokemon.img}/>
      {shiny ? ( <button type="button" onClick={() =>handleClick()} className="btn btn-secondary">NORMAL</button>) : (<button type="button" onClick={() =>handleClick()} className={`btn btn-danger ${style.buttonshiny}`}>SHINY</button>)}
       
      </div>
      <div className={style.info}>
        <div className={style.info1}>
        <div className={style.infoSon}>
          <p>Name: {name}</p>
          <p>Id: {pokemon.id}</p>
        </div>
        <div className={style.info1Son}>
          {pokemon.type[1] ?  <p>Type: {pokemon.type[0]} / {pokemon.type[1]}</p> :
          <p>Type: {pokemon.type[0]}</p>}
         
          
        </div>
        </div>
        <div className={style.info2}>
            <p className={style.title}>Statistics</p>
            <p>HP:</p>
          <div className={`progress ${style.progress}`} role="progressbar" aria-label="Success example" aria-valuenow={pokemon.hp} aria-valuemin={0} aria-valuemax={maxHP}>
            <div className="progress-bar bg-danger" style={{width: `${pokemon.hp / maxHP * 100}%`}}>{pokemon.hp}</div>
          </div>

            <p>Attack:</p>
            <div className={`progress ${style.progress}`} role="progressbar" aria-label="Info example" aria-valuenow={pokemon.attack} aria-valuemin={0} aria-valuemax={maxHP}>
            <div className={`progress-bar bg-warning text-white`} style={{width: `${pokemon.attack / maxHP * 100}%`}}>{pokemon.attack}</div>
          </div>
          
            <p>Defense:</p>
            <div className={`progress ${style.progress}`} role="progressbar" aria-label="Success example" aria-valuenow={pokemon.defense} aria-valuemin={0} aria-valuemax={maxHP}>
            <div className="progress-bar bg-info text-white" style={{width: `${pokemon.defense / maxHP * 100}%`}}>{pokemon.defense}</div>
          </div>
        </div>
        <div className={style.info3}>
          <div>
            <span className={style.title}>Moves:</span> 
          <div className={style.moves}>
            <p>{pokemon.moves[0]}</p>
            {pokemon.moves[1] ? <p>{pokemon.moves[1]}</p> : null}
            {pokemon.moves[2] ? <p>{pokemon.moves[2]}</p> : null}
            {pokemon.moves[3] ? <p>{pokemon.moves[3]}</p> : null}

            </div>
            </div>
          <div>
          <span className={style.title}>Abilities:</span>
          <div className={style.moves}>
            <p>{pokemon.abilities[0]}</p>
            {pokemon.abilities[1] ? <p>{pokemon.abilities[1]}</p> : null}

          </div>
          </div>
        </div>
      </div>
      
      </div>
      )} 
      

    </div>
  )
}

export default Pokemon;