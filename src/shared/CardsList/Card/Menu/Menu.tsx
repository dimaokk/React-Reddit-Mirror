import React, { useState } from "react";
import styles from "./Menu.css";
import Dropdown from "../../../Dropdown/Dropdown";
import { GenericList } from "../../../GenericList/GenericList";
import { generateId } from "../../../../utils/ts/generateRandomIndex";
import { merge } from "../../../../utils/ts/merge";
import { EColor, Text } from "../../../Text/Text";

import { MenuIcon } from "../../../Icons/MenuIcon";
import MenuItemsList from "./MenuItemsList/MenuItemsList";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <div className={styles.dropdown}>
                    <MenuItemsList postId="1234" />
                    <button className={styles.closeButton}>
                        <Text mobileSize={12} size={14} color={EColor.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    );
}
