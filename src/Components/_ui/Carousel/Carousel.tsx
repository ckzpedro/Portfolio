"use client"

import React, { useState, useEffect } from 'react';
import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaGithub, FaDatabase, FaNodeJs } from 'react-icons/fa';
import styles from './Carousel.module.css'; // Importa o CSS


const icons = [FaFigma, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase];


export default function Carousel() {
    return (
        <div className={styles.placeholder}>
            {icons.map((Icon, index) => (
                <div
                    key={index}
                    className="carousel-item"
                >
                    <Icon size={70} color="#403D39" /> {/* Cor e tamanho dos ícones */}
                </div>
            ))}
        </div>
    )
}

