import React from 'react'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv}>
                <p className={styles.viyana}>ВиЯна</p>
                <p className={styles.moto}>Детски терапевтичен и игрови център</p>
            </div>
        </div>
    )
}
