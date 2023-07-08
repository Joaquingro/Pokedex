import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../Pokemons/Pokemons.module.css";
import { useState } from "react";
export default function Pokemons({ Link }) {

  const [query, setQuery] = useState("");
  return (
  <>
    <Header query={query} setQuery={setQuery}/>
    <main className={style.main}>
      <h1>Pokemons</h1>
    </main>
    <Footer Link = {Link}/>

  </>
  )
}
