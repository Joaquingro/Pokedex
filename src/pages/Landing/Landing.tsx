import style from "../Landing/Landing.module.css";
import pokedex from "../../assets/pokeball.png";
import "animate.css";



export default function Loading({Link}: any) {

 
  return (
    <div className={style.container}>
        <div>
            <h1>Welcome to the pokedex</h1>
            <p>Discover and learn everything about pokemons!</p>
            <Link to = "/pokemons">
              <button 
              type="button" 
              className={`btn btn-outline-danger ${style.button}`}>Let's go!</button>
            </Link>
        </div>
        
        <img 
        className = {`animate__animated animate__rollIn animate__slow ${style.pokeball1}`} 
        src={pokedex} 
        alt=""
        
        ></img>

    </div>
  )
}
