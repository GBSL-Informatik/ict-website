import React from 'react';
import styles from '../Features/styles.module.scss';
// @ts-ignore:next-line 2307
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Feature from '../Feature';

export default function Features(): JSX.Element {
  const sidebar = useDocsSidebar();
  return (
    <div className={styles.features}>
      {sidebar.items.map((item, idx) => {
        const isSelf = `/${sidebar.name}/` === (item as any).href;
        if (
          !isSelf &&
          (item.type === 'link' || item.type === 'category') &&
          item.customProps &&
          item.customProps.icon
        ) {
          return (
            <Feature icon={item.customProps.icon as string} name={item.label} route={item.href} key={idx} />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
