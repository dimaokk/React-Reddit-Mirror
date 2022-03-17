import React from "react";
import styles from "./Controls.css";
import { EIcon } from "../../../Icons/iconsTypes";
import Icons from "../../../Icons/Icon";
export default function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <Icons name={EIcon.upArrow} size={19} />
        </button>
        <span className={styles.karmaValue}>254</span>
        <button className={styles.down}>
          <Icons name={EIcon.downArrow} size={19} />
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
