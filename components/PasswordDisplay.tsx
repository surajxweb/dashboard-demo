import React from "react";
import styles from "./PasswordDisplay.module.css";

export default function PasswordDisplay() {
  return (
    <div className={styles.nav2}>
      <div className={styles.text}>
        You can use email id: test@testing.com and password: 1234
      </div>
    </div>
  );
}
