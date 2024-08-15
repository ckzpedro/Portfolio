'use client'
import styles from './Navbar.module.css'
import LanguageButton from "../LanguageButton/LanguageButton";


export default function Navbar() {
    return (
        <div className={styles.placeholder}>
            <div>
            </div>
            <div className={styles.buttons}>
                <LanguageButton action='/' text="Pt-br" />
                <LanguageButton action='/eng' text="Eng" />
            </div>
        </div>
    )
}