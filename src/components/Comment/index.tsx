import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'

interface CommentProps {
    content: string,
    onDeleteComment: (content: any) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar source='https://github.com/rogerrm95.png' hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rogério Marques</strong>
                            <time dateTime='2022-05-11 08:11:30' title='11 de Maio ás 11:13'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário' onClick={() => handleDeleteComment()}>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}