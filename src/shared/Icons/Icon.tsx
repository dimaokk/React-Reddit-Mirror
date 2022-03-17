import React from "react";
import IconsSVG from "./iconns.svg";
import { EIcon } from "./iconsTypes";

interface IconsProp {
  name: EIcon;
  color?: any;
  size?: number;
  className?: string;
}

function Icons({ name, color , size , className }: IconsProp) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`static/${IconsSVG}#${name}`} />
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
}

export default Icons;
