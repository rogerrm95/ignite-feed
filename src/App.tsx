import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import './styles/global.css'
import styles from './styles/App.module.css'

function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
