import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { Posts as PostsType } from '../../App'

import styles from './styles.module.css'
import { ChangeEvent, FormEvent, TextareaHTMLAttributes, useState } from 'react'

interface PostPros extends PostsType { }

export function Post({ author, content, publishedAt }: PostPros) {
    // Datas //
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    // State //
    const [comments, setComments] = useState(['Post muito legal, certo ?'])
    const [newComments, setNewComments] = useState('')

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newComments])
        setNewComments('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComments(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComments.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

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
                            return <p key={paragraph.content}>{paragraph.content}</p>
                        }
                        else if (paragraph.type === 'link') {
                            return <p key={paragraph.content}><a href="">{paragraph.content}</a></p>
                        }
                    })
                }
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    value={newComments}
                    onChange={handleNewCommentChange}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    ))
                }
            </div>
        </article>
    )
}
/* 
# Programação imperativa - O que deve ser feito
    - Analogia - Receita de bolo
    - Passo a Passo

# Programação declarativa - Quais as condições para se ter o resultado final.
    - React
*/