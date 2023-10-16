import Heading from "./heading";
import styles from '@/styles/index.module.css';
import bg from '@/assets/background.jpg';
 
export default function Layout({ children }) {
  return (
    <div className={styles.layout}
    style={{backgroundImage: `url(${bg.src})`, backgroundSize:'cover'}}>
      <Heading/>
      <main className={styles.main}>{children}</main>
      <p className={styles.source}>www.anh-dev.com</p>
    </div>
  )
}