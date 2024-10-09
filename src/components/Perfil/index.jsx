import styles from './Perfil.module.css';


const Perfil = ({nomeUsuario}) => {
    //para desestruturar a propriedade

    return (
        <header className={styles.header}>
            {/* JSON.stringify serve para converter um objeto em uma string */}

            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;