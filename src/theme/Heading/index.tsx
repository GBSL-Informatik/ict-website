import React, { ComponentProps } from "react";
import Heading from "@theme-original/Heading";
import type HeadingType from "@theme/Heading";
import styles from "./style.module.scss";
import clsx from "clsx";
import useFrontMatter from "@theme/useFrontMatter";

type Props = ComponentProps<typeof HeadingType>;

export default function HeadingWrapper(props: Props): JSX.Element {
  const { sidebar_custom_props } = useFrontMatter();
  return (
    <div className={styles.title}>
      {sidebar_custom_props?.icon && (
        <a
          className={clsx(styles.icon, sidebar_custom_props.icon, "mdi")}
          style={{ fontSize: `var(--ifm-${props.as}-font-size)` }}
        ></a>
      )}
      <Heading {...props} />
    </div>
  );
}
