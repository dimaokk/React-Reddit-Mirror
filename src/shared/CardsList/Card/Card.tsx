import React from "react";
import styles from "./Card.css";
import Controls from "./Controls/Controls";
import Menu from "./Menu/Menu";
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";

function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}

export default Card;
