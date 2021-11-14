import React from "react";
import styles from "./Text.css";
import classNames from "classnames";
import  {SaveIcon}  from "./SaveIcon";


const ComponentIcon = {
  save : <SaveIcon />
}

type ComponentIcon = typeof ComponentIcon[keyof typeof ComponentIcon]



interface IIconProps {
    name: ComponentIcon,
}

export function Icon ({name}:IIconProps) {
   return(
       {name}
   )
}
