import React from 'react'
import styles from './linksstyle.module.css'

export default function HomePageNavigationButtons({valueFromParent}) {
    return (
        <div>
            <p className={styles.links}>{valueFromParent}</p>
        </div>
    )
}
