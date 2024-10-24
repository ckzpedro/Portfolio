"use client"
import { SetStateAction, useState } from 'react';
import styles from './Navbar.module.css'
import LanguageButton from "../LanguageButton/LanguageButton";
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathname = usePathname()

    const [active, setActive] = useState<number | null>(null)

    const navOptionsptbr = ['INÍCIO', 'SOBRE MIM', ' PROJETOS', 'CONTATO']
    const navOptionseng = ['HOME', 'ABOUT ME', 'PROJECTS', 'CONTACT']

    const action = (e: any) => {
        setActive(e)
    }

    const navptbr = (
        <ul className={styles.lista}>
            {navOptionsptbr.map((item, index) => (
                <li
                    key={index}
                    className={`${styles.nav_Item} ${active === index ? styles.nav_item_active : ''}`}
                    onClick={() => action(index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    )

    const naveng = (
        <ul className={styles.lista}>
            {navOptionseng.map((item, index) => (
                <li
                    key={index}
                    className={`${styles.nav_Item} ${active === index ? styles.nav_item_active : ''}`}
                    onClick={() => action(index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    )

    return (
        <div className={styles.placeholder}>

            {pathname === '/' ? (navptbr) : (naveng)}

            <div className={styles.buttons}>
                <LanguageButton action='/' text="Pt-br" />
                <LanguageButton action='/eng' text="Eng" />
            </div>
        </div>
    )
}
