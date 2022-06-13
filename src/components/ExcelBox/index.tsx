import React from "react";
import styles from "./styles.module.scss";
import FXSvf from './fx.svg';

interface Props {
  children?: React.ReactNode;
}

const ExcelBox = (props: Props) => {
  return (
    <figure>
      <div className={styles.searchContainer}>
        <FXSvf className={styles.searchIcon}  />
        <code>
          <slot>{props.children}</slot>
        </code>
      </div>
    </figure>
  );
};

export default ExcelBox;
