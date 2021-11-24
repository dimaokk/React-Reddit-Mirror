import React from "react";
import Icons from "../../../../Icons/Icon";
import styles from "./MenuItemsList.css";
import { EColor, Text } from "../../../../Text/Text";
import { EIcon } from "../../../../Icons/iconsTypes";
interface IMenuItemListProps {
    postId: string;
}

export default function MenuItemsList({ postId }: IMenuItemListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icons name={EIcon.block} size={16} />
                
                <Text size={12} color={EColor.grey99}>
                    Скрыть
                </Text>
            </li>
            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icons name={EIcon.warn} size={16} />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icons name={EIcon.warn} size={16} />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icons name={EIcon.warn} size={16} />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icons name={EIcon.warn} size={16} />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
        </ul>
    );
}
