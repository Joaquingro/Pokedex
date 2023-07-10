import style from "../Categories/Categories.module.css";

export default function Categories({Link}:any) {
  return (
    <div className={style.container}>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Kanto
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Johto
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Hoenn
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Sinnoh
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Teselia
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Kalos
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Alola
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Galar
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Hisui
        </Link>
        <Link className = {style.footerLink} to = "/pokemons">
            {/* <img className = {style.footerIcon}  alt="Pokemons"/> */}
            Paldea
        </Link>

    </div>
  )
}
