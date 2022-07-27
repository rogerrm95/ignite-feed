import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { Posts as PostsType } from '../../App'

import styles from './styles.module.css'

interface PostPros extends PostsType { }

export function Post({ author, content, publishedAt }: PostPros) {
    // Datas //
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

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

                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(paragraph => {
                        if (paragraph.type === 'paragraph') {
                            return <p>{paragraph.content}</p>
                        }
                        else if (paragraph.type === 'link') {
                            return <p><a href="">{paragraph.content}</a></p>
                        }
                    })
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