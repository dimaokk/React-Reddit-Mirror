import React from "react";
import styles from './SearchBlock.css'
import UserBlock from "./UserBlock/UserBlock";

function SearchBlock () {
    return(
        <div className={styles.searchBlock}>
            SearchBlock
            <UserBlock />
        </div>
    )
}

export default SearchBlock