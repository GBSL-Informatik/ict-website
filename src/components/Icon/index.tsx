import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  icon: string;
  size?: string;
  caption: string;
  color?: string;
}

const Icon = (props: Props) => {
  return (
    <div className={styles.icon}>
      <i 
        className={clsx('mdi', props.icon, styles.ico)} 
        style={{fontSize: props.size, color: props.color}}
      />
      <span className={clsx(styles.caption)}>{props.caption}</span>
    </div>
  );
};

export default Icon;
