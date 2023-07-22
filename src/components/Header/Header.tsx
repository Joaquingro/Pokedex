import style from "../Header/Header.module.css";
import pokemon from "../../assets/logo.png"

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}


export default function Header({query, setQuery} : HeaderProps) {
   
    
  return (
    <div className={style.containerfather}>
    <header className={style.container}>
    <img src={pokemon} alt="pokemon"/>
    <form onSubmit = {(e) => e.preventDefault()} className={style.header}>
        <p>Find your favorite pokémon!</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${style.input}`}
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
    </header>
    </div>
  )
}
