import React from "react";
import styles from "./CardsList.css";
import Card from "./Card/Card";

function CardsList() {
    return(
        <ul className={styles.cardsList}>
            <Card /> 
        </ul>
    ) 
}

export default CardsList;
