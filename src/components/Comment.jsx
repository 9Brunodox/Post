import styles from './Comment.module.css';
import Brunodox from '../assets/perfil1.jpg'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={Brunodox} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Moreira</strong>
                            <time title="11 de maio às 08:13h" datetime="2024-05-25 09:13:30">Cerca de 1 hora atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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