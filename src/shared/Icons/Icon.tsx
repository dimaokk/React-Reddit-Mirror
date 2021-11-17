import React from "react";
import IconsSVG from "./icons.svg";
import {EIcons} from './iconsTypes'

interface IconsProp {
    name: EIcons;
    color?: any;
    size?: number;
    className?: string;
}

function Icons({ name, color, size, className }: IconsProp) {
    return (
        <svg
            className={`icon icon-${name} ${className}`}
            fill={color}
            stroke={color}
            width={size}
            height={size}
        >
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    );
}

export default Icons;
