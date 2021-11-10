import React, { useEffect, useState } from "react";
import styles from "./Dropdown.css";

interface IDropdownProp {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {}

export default function Dropdown({
    button,
    children,
    isOpen,
    onClose = NOOP,
    onOpen =  NOOP,
}: IDropdownProp) {
    const [isOpenDrop, setIsOpenDrop] = useState(isOpen);

    useEffect(() => {
        setIsOpenDrop(isOpen);
    }, [isOpen]);

    useEffect(()=> {
        isOpenDrop ? onOpen() : onClose()
    }, [isOpenDrop])

    const handlrOpen = () => {
        if (isOpen === undefined) {
            setIsOpenDrop(isOpenDrop);
        }
    };
    return (
        <div className={styles.container}>
            <div onClick={() => setIsOpenDrop(!isOpenDrop)}>{button}</div>
            {isOpenDrop && (
                <div className={styles.listContainer}>
                    <div
                        className={styles.list}
                        onClick={() => setIsOpenDrop(false)}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
