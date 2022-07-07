import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
import ImageLoader from '../Services/ImageLoader/ImageLoader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  )
}
