import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return <div className={styles.button}>{props.children}</div>;
}

export default Button;
