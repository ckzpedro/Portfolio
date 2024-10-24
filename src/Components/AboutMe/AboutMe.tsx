import { PiArrowBendDownRight } from 'react-icons/pi'
import styles from './AboutMe.module.css'

type Props = {
    title: string
    item: string
}

export default function AboutMe({ item, title }: Props) {
    return (
        <div className={styles.placeholder}>
            <h1><PiArrowBendDownRight />{title}</h1>
            <div className={styles.infos}>
                <p>{item}</p>
            </div>
        </div>
    )
}