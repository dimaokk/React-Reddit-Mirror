import React from "react";
import styles from './Card.css'
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";

function Card () {
    return(
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <div className={styles.menu}></div>
            <div className={styles.controls}></div>
        </li>
    )
}

export default Card