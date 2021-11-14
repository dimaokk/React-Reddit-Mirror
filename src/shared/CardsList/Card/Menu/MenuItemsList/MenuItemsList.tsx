import React from "react";
import { BlockIcon } from "../../../../Icons/BlockIcon";
import { WarningIcon } from "../../../../Icons/WarningIcon";
import styles from "./MenuItemsList.css";
import { EColor, Text } from "../../../../Text/Text";
interface IMenuItemListProps {
    postId: string;
}

export default function MenuItemsList({ postId }: IMenuItemListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <BlockIcon />
                <Text size={12} color={EColor.grey99}>
                    Скрыть
                </Text>
            </li>
            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
            <div className={styles.divider} />
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
        </ul>
    );
}
