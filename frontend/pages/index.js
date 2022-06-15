import styles from '../styles/app.module.css'

import Finder from '../components/finder'
// components 

export default function Home() {
  
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Tu aventura, tus fotos ! 
      </h1>
    <Finder/>
    <Galery/>
    </div>
  )
}
