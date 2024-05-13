import React, { ComponentProps } from 'react';
import Heading from '@theme-original/Heading';
import type {WrapperProps} from '@docusaurus/types';
import type HeadingType from '@theme/Heading';
import styles from './style.module.scss';
import clsx from 'clsx';
import useFrontMatter from '@theme/useFrontMatter';
import Icon from '@mdi/react';
import * as MdiIcons from '@mdi/js';
import { camelCased } from '@site/src/plugins/helpers';


type Props = WrapperProps<typeof HeadingType>;

export default function HeadingWrapper(props: Props): JSX.Element {
  const { sidebar_custom_props } = useFrontMatter();
  const { icon } = sidebar_custom_props;
  return (
    <div className={styles.title}>
      {icon && MdiIcons[camelCased(icon)] && (
        <a className={clsx(styles.icon)}>
          <Icon 
            path={MdiIcons[camelCased(icon)]} 
            size={`var(--ifm-${props.as}-font-size)`}
            className={clsx(styles.mdi)}
          />
        </a>
      )}
      <Heading {...props} />
    </div>
  );
}