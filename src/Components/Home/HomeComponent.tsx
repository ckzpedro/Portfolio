import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import styles from './HomeComponent.module.css'

type Props = {
    info_1: any,
    info_2: string,
    info_3: string,
}

export default function HomeComponent({ info_1, info_2, info_3 }: Props) {
    return (
        <div className={styles.placeholder}>
            <div className={styles.infos}>
                <h1 dangerouslySetInnerHTML={{ __html: info_1 }} />
                <h2>{info_2}</h2>
                <p>{info_3}</p>
                <FaLinkedin size={40} />
                <FaGithub size={40} />
            </div>
            <div className={styles.imageplaceholder}>
                <img className={styles.image} src="https://placehold.co/432x536" alt="" />
            </div>
        </div>
    )
}
