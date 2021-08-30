import React from 'react'
import styles from './Home.module.css'
import HomePageNavigationButtons from '../../Components/HomePageNavigationButtons'

export default function Home() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.logoDiv}>
                <p className={styles.viyana}>ВиЯна</p>
                <p className={styles.moto}>Детски терапевтичен и игрови център</p>
                <div className={styles.linkswrapper}>
                    <HomePageNavigationButtons valueFromParent={'Информация'} />
                    <HomePageNavigationButtons valueFromParent={'Услуги'} />
                    <HomePageNavigationButtons valueFromParent={'Защо ранната интервенция е важна?'} />
                    <HomePageNavigationButtons valueFromParent={'Контакти'} />
                </div>
            </div>
            {/* <HomePageNavigationButtons valueFromParent={'something'} />
            <HomePageNavigationButtons valueFromParent={'something2'} /> */}
        </div>
    )
}