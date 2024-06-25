import { Link } from "react-router-dom"
import style from "./Card.module.css"
import iconFavorito from "./iconfavorito.png"
import iconNoFavorito from "./iconNoFavorito.png"
import { useFavoritosContext } from "context/Favoritos"

function Card({ id, capa, titulo }) {

    const { favorito, agregarFavorito } = useFavoritosContext()
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? iconFavorito : iconNoFavorito

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={style.capa} />
            <h2>{titulo}</h2>
            </Link>

            <img
                src={icon}
                alt="Icono Favorito"
                className={style.Favorito}
                onClick={()=>agregarFavorito({id,titulo,capa})}
            />
        </div>
    )
}
export default Card