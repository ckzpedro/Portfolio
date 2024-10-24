"use client"

import styles from "./LanguageButton.module.css"

import Link from "next/link"

interface TextProps {
    text: string
    action: any
}

export default function LanguageButton({ text, action }: TextProps) {
    return (
        <>
            <Link href={action}>
                <button className={styles.placeholder}>{text}</button>
            </Link>
        </>
    )
}