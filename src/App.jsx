import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Bruno" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut faucibus ex. Fusce vel bibendum ex. Quisque pretium dui eu mi rhoncus pretium. Maecenas quis arcu non lectus scelerisque gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sed quam sit amet pulvinar. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus." 
          />
          
          <Post 
            author="Fisher" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut faucibus ex. Fusce vel bibendum ex. Quisque pretium dui eu mi rhoncus pretium. Maecenas quis arcu non lectus scelerisque gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sed quam sit amet pulvinar. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus." 
          />

        </main>
      </div>
    </div>
  )
}

export default App