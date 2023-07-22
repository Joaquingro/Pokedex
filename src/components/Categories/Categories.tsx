import style from "../Categories/Categories.module.css";
import "animate.css";
import pokedex from "../../assets/pokedex.png";
export default function Categories() {
  return (
    <div className={style.container}>
        <img src={pokedex} alt="pokedex"/>
        <div>
         <select className={style.filters}>
            <option disabled = {true} value = "">Regions</option>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Hoenn">Hoenn</option>
            <option value="Sinnoh">Sinnoh</option>
            <option value="Teselia">Teselia</option>
            <option value="Kalos">Kalos</option>
            <option value="Alola">Alola</option>
            <option value="Galar">Galar</option>
            <option value="Hisui">Hisui</option>
         </select>
        </div>
    </div>
  )
}

  {/* <Link className = {style.footerLink} to = "/pokemons">
      <img className = {style.footerIcon} src ={pokeball1}  alt="Pokemons"/>
      <p>151</p>
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
      <p>107</p>

      Sinnoh
  </Link>
  <Link className = {style.footerLink} to = "/teselia">
      <img className = {style.footerIcon} src ={pokeball5}  alt="Pokemons"/>
      <p>156</p>

      Teselia
  </Link>
  <Link className = {style.footerLink} to = "/kalos">
      <img className = {style.footerIcon} src ={pokeball6}  alt="Pokemons"/>
      <p>72</p>

      Kalos
  </Link>
  <Link className = {style.footerLink} to = "/alola">
      <img className = {style.footerIcon} src ={pokeball7}  alt="Pokemons"/>
      <p>88</p>

      Alola
  </Link>
  <Link className = {style.footerLink} to = "/galar">
      <img className = {style.footerIcon} src ={pokeball8}  alt="Pokemons"/>
      <p>96</p>

      Galar
  </Link>
  <Link className = {style.footerLink} to = "/hisui">
      <img className = {style.footerIcon} src ={pokeball9}  alt="Pokemons"/>
      <p>103</p>

      Hisui
  </Link> */}
  