import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import Link from "@docusaurus/Link";

export interface FeatureProps {
  name: string;
  icon: string;
  route: string;
}

const Feature = ({ name, icon, route }: FeatureProps) => {
  return (
    <div className={styles.feature}>
      <Link to={route}>
        <span className={clsx("mdi", icon, styles.icon)}></span>
      </Link>
      <h2>
        <Link to={route}>{name}</Link>
      </h2>
    </div>
  );
};

export default Feature;
