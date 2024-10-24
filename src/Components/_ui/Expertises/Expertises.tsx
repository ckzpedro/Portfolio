import styles from './Expertises.module.css'

type Props = {
    icon: any
    title: string
    content: string
}

export default function Expertises({ icon, title, content }: Props) {
    return (
        <div className={styles.placeholder}>
            {icon}
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}
