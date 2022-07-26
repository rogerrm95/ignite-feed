import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'
import { Posts } from '../../App'

interface PostPros extends Posts { }

export function Post({ author, content, publishedAt }: PostPros) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar source={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time dateTime='2022-05-11 08:11:30' title='11 de Maio ás 11:13'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(paragraph => (
                        <p>{paragraph.content}</p>
                    ))
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}