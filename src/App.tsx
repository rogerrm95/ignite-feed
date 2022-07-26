import { Header } from "./components/Header"
import './styles/global.css'
import styles from './styles/App.module.css'
import { SideBar } from "./components/SideBar"

function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>

        <main>
          <h1>Post</h1>
        </main>
      </div>
    </div>
  )
}

export default App
