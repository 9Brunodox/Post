import styles from './Comment.module.css';
import Brunodox from '../assets/perfil1.jpg'
import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={Brunodox} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Moreira</strong>
                            <time title="11 de maio às 08:13h" dateTime="2024-05-25 09:13:30">Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}