import React from 'react'
import { useState } from "react";
import styles from "./checkbox.module.css"



const Checkbox = ({text}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.container}>
          <label className={styles.labelContainer}>
      <input className={styles.input}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
  <svg
        className={`${isChecked? styles.checkboxActive:styles.checkbox}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
        />
      </svg>
      <span className={styles.span}>{text}</span>
    </label>

    </div>
  )
}

export default Checkbox