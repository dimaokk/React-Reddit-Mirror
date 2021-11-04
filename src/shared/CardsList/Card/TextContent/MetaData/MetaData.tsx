import React from "react";
import styles from './MetaData.css'

export default function MetaData () {
    return (
        
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img 
                    className={styles.avatar}
                    src="https://www.clipartmax.com/png/middle/200-2008586_avatar-png.png" 
                    alt="User photo" 
                    />
                    <a href="#user-url" className={styles.username}>Дмитрий Цыбин</a>
                </div>
                <span className={styles.createdAt}>3 часа назад</span>
            </div>
           
    )
}

