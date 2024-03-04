import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <div onClick={props.onClick} className={styles.button}>
      {props.children}
    </div>
  );
}

export default Button;
