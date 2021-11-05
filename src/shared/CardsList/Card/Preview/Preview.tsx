import React from "react";
import styles from './Preview.css'

export default function Preview(){
    return(
        <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://mmodnaya.ru/wp-content/uploads/2021/04/foto-prirody.jpg"
                    alt="Post Photo"
                />
            </div>
    )
}