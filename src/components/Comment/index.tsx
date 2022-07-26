import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/56278484?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rogério Marques</strong>
                            <time dateTime='2022-05-11 08:11:30' title='11 de Maio ás 11:13'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/> 
                        </button>

                    </header>

                    <p>
                        Muito bom Dev, parabens !!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}