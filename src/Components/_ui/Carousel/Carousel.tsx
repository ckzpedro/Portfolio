"use client"

import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiVite } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import styles from './Carousel.module.css'; // Importa o CSS


const icons = [FaFigma, FaHtml5, FaCss3Alt, FaJs, SiTypescript, FaReact, SiVite, RiNextjsLine, SiFlutter, FaNodeJs, FaGitAlt, FaGithub, GrMysql];


export default function Carousel() {
    return (
        <div className={styles.placeholder}>
            {icons.map((Icon, index) => (
                <div
                    key={index}
                    className="carousel-item"
                >
                    <Icon size={70} color="#403D39" />
                </div>
            ))}
        </div>
    )
}

