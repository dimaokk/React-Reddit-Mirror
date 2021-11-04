import React from "react";
import styles from './Header.css'
import SearchBlock from "./SearchBlock/SearchBlock";
import SortBlock from "./SortBlock/SortBlock";
import ThreadTitle from "./ThraedTitle/ThreadTitle";

function Header() {
    return(
        <header className={styles.header}>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    )
}

export default Header