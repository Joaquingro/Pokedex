import style from "../Categories/Categories.module.css";
import { pokeball1, pokeball2, pokeball3, pokeball4, pokeball5, pokeball6, pokeball7, pokeball8, pokeball9, pokeball10 } from ".";
import "animate.css";

export default function Categories({Link}:any) {
  return (
    <div className={style.container}>
        <Link className = {style.footerLink} to = "/pokemons">
            <img className = {style.footerIcon} src ={pokeball1}  alt="Pokemons"/>
            <p>150</p>
            Kanto
        </Link>
        <Link className = {style.footerLink} to = "/johto">
            <img className = {style.footerIcon} src ={pokeball2}  alt="Pokemons"/>
            <p>100</p>

            Johto
        </Link>
        <Link className = {style.footerLink} to = "/hoenn">
            <img className = {style.footerIcon} src ={pokeball3}  alt="Pokemons"/>
            <p>135</p>

            Hoenn
        </Link>
        <Link className = {style.footerLink} to = "/sinnoh">
            <img className = {style.footerIcon} src ={pokeball4}  alt="Pokemons"/>
            <p>102</p>

            Sinnoh
        </Link>
        <Link className = {style.footerLink} to = "/teselia">
            <img className = {style.footerIcon} src ={pokeball5}  alt="Pokemons"/>
            <p>156</p>

            Teselia
        </Link>
        <Link className = {style.footerLink} to = "/kalos">
            <img className = {style.footerIcon} src ={pokeball6}  alt="Pokemons"/>
            <p>66</p>

            Kalos
        </Link>
        <Link className = {style.footerLink} to = "/alola">
            <img className = {style.footerIcon} src ={pokeball7}  alt="Pokemons"/>
            <p>72</p>

            Alola
        </Link>
        <Link className = {style.footerLink} to = "/galar">
            <img className = {style.footerIcon} src ={pokeball8}  alt="Pokemons"/>
            <p>8</p>

            Galar
        </Link>
        <Link className = {style.footerLink} to = "/hisui">
            <img className = {style.footerIcon} src ={pokeball9}  alt="Pokemons"/>
            <p>6</p>

            Hisui
        </Link>
        <Link className = {style.footerLink} to = "/paldea">
            <img className = {style.footerIcon} src ={pokeball10}  alt="Pokemons"/>
            <p>1</p>

            Paldea
        </Link>

    </div>
  )
}
