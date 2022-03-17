import React from "react";
import style from "./UserBlock.css";
import { EIcon } from "../../../Icons/iconsTypes";
import Icons from "../../../Icons/Icon";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export default function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=hz57DUl3bOas7s-iDZE9ww&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    >
      <div className={style.avatar}>
        {avatarSrc ? (
          <img src={avatarSrc} alt="avatar" />
        ) : (
          <Icons name={EIcon.avatar} size={50} />
        )}
      </div>
      <div className={style.username}>
        {userName ? <span>{userName}</span> : <span>Anonime</span>}
      </div>
    </a>
  );
}
