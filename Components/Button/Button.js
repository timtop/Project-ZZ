import React from "react";
import styles from "./button.module.scss";

function Button({ children, type, isDisabled }) {
  return (
    <>
      <button
        type={type}
        disabled={isDisabled}
        //   className={`btn btn-${version}`}
        className={`${styles.btn} ${styles.lgbody_medium}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
