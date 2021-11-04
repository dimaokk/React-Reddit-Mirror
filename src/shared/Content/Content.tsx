import React from "react";
import styles from "./Content.css";

interface IContentProp {
    children?: React.ReactNode;
}

function Content({ children }: IContentProp) {
    return(
        <main className={styles.content}>
        {children}
        </main>
    ) 
}

export default Content;
