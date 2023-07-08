import style from "./Footer.module.css";
import pikachu from "../../assets/pikachu.png";
import pokeball from "../../assets/pokeball.png";
import map from "../../assets/pointer.png";

export default function Footer({ Link }) {
  return (
    <footer className={style.footer}>
        <Link className = {style.footerLink} to = "/pokemons">
            <img className = {style.footerIcon} src={pikachu} alt="Pokemons"/>
            Pokemons
        </Link>
        <Link className = {style.footerLink} to = "/items">
            <img className = {style.footerIcon} src={pokeball} alt="Pokeball"/>
            Items

        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            <img className = {style.footerIcon} src={map} alt="Map"/>
            Map
        </Link>
    </footer>
  )
}
