import React from "react";
import MetaData from "./MetaData/MetaData";
import styles from './TextContent.css'

export default function TextContent () {
    return (
        <div className={styles.textContent}>
            <MetaData />
            <h2 className={styles.title}>
                <a href="#post-url">Реализация намеченных плановых заданий</a>
            </h2>
        </div>
    )
}

