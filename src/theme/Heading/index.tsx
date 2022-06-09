import React, {ComponentProps} from 'react';
import Heading from '@theme-original/Heading';
import type HeadingType from '@theme/Heading';
import useFrontMatter from '@theme/useFrontMatter';
import styles from './style.module.scss';
import clsx from "clsx";


type Props = ComponentProps<typeof HeadingType>;

export default function HeadingWrapper(props: Props): JSX.Element {
  const frontMatter = useFrontMatter();
  return (
    <div className={styles.title}>
      {
        frontMatter.icon && (
          <a 
            className={clsx(styles.icon, frontMatter.icon, 'mdi')}
            style={{fontSize: `var(--ifm-${props.as}-font-size)`}}
          ></a>
        )
      }
      <Heading {...props} />
    </div>
  );
}
