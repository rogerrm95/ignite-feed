import styles from './styles.module.css'
import {PencilLine} from 'phosphor-react'

export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1562699372-9d06fa3d9d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                className={styles.cover}
                />

            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/56278484?v=4" className={styles.avatar}/>

                <strong>Rogério Marques</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}