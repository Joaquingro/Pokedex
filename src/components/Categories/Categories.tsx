import style from "../Categories/Categories.module.css";
import "animate.css";
import pokedex from "../../assets/pokedex.png";
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import  { orderRegions } from "../../redux/actions";
import map from "../../assets/pointer.png"

export default function Categories() {
const dispatch: Dispatch<any>  = useDispatch();

const handleRegions =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(orderRegions(value))
}


  return (
    <div className={style.container}>
        <div className={style.imagePokedex}>
            <img src={pokedex} alt="pokedex"/>
        </div>
        <div>
        <div className={style.containerSelect}>
        <img className={style.map} src={map} alt="map"/>
         <select onChange={handleRegions} className={style.filters}  defaultValue="">
            <option value="" disabled>Regions</option>
            <option value="All">All pokemons</option>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Hoenn">Hoenn</option>
            <option value="Sinnoh">Sinnoh</option>
            <option value="Teselia">Teselia</option>
            <option value="Kalos">Kalos</option>
            
         </select>
      <p>Welcome! Choose a <strong className={style.strongp}>region</strong> and discover the pokemons!</p>
    </div>
        </div>
    </div>
  )
}

 