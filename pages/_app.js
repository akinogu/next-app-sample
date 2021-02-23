import '../styles/globals.css'
import styles from '../styles/app.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
