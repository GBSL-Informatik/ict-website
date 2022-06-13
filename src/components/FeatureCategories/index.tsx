import React from 'react';
import clsx from 'clsx';
import styles from '../Features/styles.module.scss';
import {useDocsSidebar} from '@docusaurus/theme-common';
import Feature from '../Feature';

export default function Features(): JSX.Element {
  const sidebar = useDocsSidebar();
  return (
    <div className={styles.features}>
      {sidebar.items.map((item, idx) => {
        if ((item.type === 'link' || item.type === 'category') && item.customProps && item.customProps.icon) {
          return (
            <Feature icon={item.customProps.icon as string} name={item.label} route={item.href} key={idx} />
          )
        } else {
          return null;
        }
      })}
    </div>
  );
}
