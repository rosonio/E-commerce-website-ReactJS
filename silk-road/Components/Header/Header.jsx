import * as React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import ImageLoader from '../../Services/ImageLoader/ImageLoader'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <Image loader={ImageLoader}
                        src="Logo.png"
                        alt="Website logo"/>
            </div>
            <div className={styles.searchSection}>
            <span>hello</span>
            </div>
            <div className={styles.buttonsSection}>
            <span>hello</span>
            </div>
        </div>
    )
}