import React, { useState } from "react";
import styles from './Menu.css'
import Dropdown from "../../../Dropdown/Dropdown";
import { GenericList } from "../../../GenericList/GenericList";
import { generateId } from "../../../../utils/ts/generateRandomIndex";
import { merge } from "../../../../utils/ts/merge";

const MENU = [
    {text:'Скырыть'},
    {text: 'Поэаловаться'}
].map(generateId)
    



export default function Menu () {
    const [menu, setMenu] = useState(MENU)

    const handleClick = (id: string) => {
        console.log(id)
    }
    return (
        <div className={styles.menu}>
                <Dropdown
                isOpen={false}
                button={
                <button className={styles.menuButton}>
                    <svg
                        width="5"
                        height="20"
                        viewBox="0 0 5 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
                        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
                    </svg>
                </button>}
                >
                <GenericList list={MENU.map(merge({onClick: handleClick}))} />
                <button>закрыть</button>
                </Dropdown>
                
            </div>
    )
}