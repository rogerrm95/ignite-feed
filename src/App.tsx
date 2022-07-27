import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import './styles/global.css'
import styles from './styles/App.module.css'

export interface Posts {
  id: number,
  author: {
    avatarUrl: string,
    name: string,
    role: string
  },
  content: Content[],
  publishedAt: Date
}

type Content = {
  type: string,
  content: string
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rogerrm95.png",
      name: 'Rogério Marques',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ], // Markdown * //
    publishedAt: new Date('2022-07-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayke Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ], // Markdown * //
    publishedAt: new Date('2022-07-26 20:00:00')
  }
] as Posts[]

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
