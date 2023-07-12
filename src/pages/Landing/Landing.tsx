import style from "../Landing/Landing.module.css";
import pokedex from "../../assets/pokeball.png";
import "animate.css";
export default function Loading({Link}: any) {
  return (
    <div className={style.container}>
        <div>
            <h1>Bienvenido a la Pokedex</h1>
            <p>¡Descubre y aprende todo acerca de los pokemons!</p>
            <Link to = "/pokemons">
              <button type="button" className="btn btn-outline-danger">Empieza</button>
            </Link>
        </div>
        <img className = "animate__animated animate__rollIn" src={pokedex} alt=""></img>
    </div>
  )
}
