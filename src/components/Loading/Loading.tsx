import style from "../Loading/Loading.module.css";
import dragonite from "../../assets/dragonite.gif";
export default function Loading() {
  return (
    <div className={style.container}>
    <div>
        <img src={dragonite} alt="loading"/>
        <p>Cargando pokemons...</p>
    </div>
    </div>
  )
}
