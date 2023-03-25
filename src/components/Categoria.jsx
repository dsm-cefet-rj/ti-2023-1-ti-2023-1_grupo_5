import styles from "../css/Categoria.module.css"
export default function Categoria(params) {
    return (
        <div className={styles.categorias_individual}>
            <p>{params.categoria.nome}</p>
            <a href={params.categoria.href}>
                <img src={params.categoria.img} alt={params.categoria.alt} className={styles.categorias_individual_imagem}/>
            </a>
        </div>
    )
}