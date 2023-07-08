import style from "../Header/Header.module.css";

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}


export default function Header({query, setQuery} : HeaderProps) {
   
    
  return (
    <>
    <header>
    <form onSubmit = {(e) => e.preventDefault()} className={style.header}>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${style.input}`}
          placeholder="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </div>
    </form>
    </header>
    </>
  )
}
