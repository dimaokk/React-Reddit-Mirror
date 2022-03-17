import React from "react";
import styles from "./Controls.css";
import { EIcon } from "../../../Icons/iconsTypes";
import Icons from "../../../Icons/Icon";
export default function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <svg
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
          </svg>
        </button>
        <span className={styles.karmaValue}>254</span>
        <button className={styles.down}>
          <svg
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
      </div>

      <div className={styles.commentsButton}>
        <Icons name={EIcon.comments} size={16} />

        <span className={styles.commentsNumber}>45</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.shareButton}>
          <Icons name={EIcon.share} size={16} />
        </button>
        <button className={styles.saveButton}>
          <Icons name={EIcon.save} size={16} />
        </button>
      </div>
    </div>
  );
}
