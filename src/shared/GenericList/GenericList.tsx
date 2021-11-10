import React from "react";
import styles from "./GenericList.css";

interface IItem {
    id: string;
    value: string;
    onClick: () => void;
}

interface IMyListProps {
    list: IItem[];
}

export default function MyList({ list }: IMyListProps) {
    return (
        <ul>
            {list.map((item, index) => (
                <li onClick={item.onClick} key={item.id}>
                    {item.value}
                </li>
            ))}
        </ul>
    );
}
