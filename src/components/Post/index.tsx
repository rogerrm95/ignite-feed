import styles from './styles.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/56278484?v=4" className={styles.avatar} />

                    <div className={styles.authorInfo}>
                        <strong>Rogério Marques</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2022-05-11 08:11:30' title='11 de Maio ás 11:13'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    Fala galeraa 👋
                </p>

                <p>
                    Acabei de subir mais um projeto no meu portifa.
                    É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>

                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>

                <p>
                    <a href="#">#novoprojeto {' '}</a>
                    <a href="#">#nlw {' '}</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}