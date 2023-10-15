import styles from '@/styles/components.module.css';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
  })

export default function Heading() {
    return(
        <div className={styles.heading}>
            
            <h1 className={lobster.className}>Git Buddies</h1>
        </div>
    )
}