import React from "react";
import styles from "./styles.module.scss";
import searchIconUrl from './search-icon.png';

interface Props {
  children?: React.ReactNode;
  caption: string;
}

const SearchBox = (props: Props) => {
  return (
    <figure className={styles.searchFigure}>
      <div className={styles.searchContainer}>
        <p style={{margin: 0}}>
          <slot>{props.children}</slot>
        </p>
        <img className={styles.searchIcon} src={searchIconUrl} />
      </div>
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};

export default SearchBox;
