import React from 'react';
import styles from '../Features/styles.module.scss';
// @ts-ignore:next-line 2307
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Feature from '../Feature';
import { ContextValue } from '../Features';
import { useLocation } from '@docusaurus/router';


export default function Features(): JSX.Element {
  const { pathname } = useLocation();
  const sidebar: ContextValue = useDocsSidebar();
  const current = (sidebar?.items || []).find((it) => it.type !== 'html' && it.href === pathname);
  if (!current || current.type !== 'category') {
    return (
      <div className={styles.features}>
        <Feature icon="mdi-heart-broken" name="Keine Unterseite Gefunden 😢" route={(sidebar?.items.find((it) => it.type !== 'html') as {href: string})?.href || '/'} />
      </div>
    );
  }
  return (
    <div className={styles.features}>
      {current.items.map((item, idx) => {
        if (item.type === 'html') {
          return null;
        }
        const isSelf = current.href === item.href;
        if (
          !isSelf &&
          item.customProps &&
          item.customProps.icon
        ) {
          return (
            <Feature icon={item.customProps.icon as string} name={item.label} route={item.href} key={idx} pages={item.type === 'category' ? item.items.length : 1} />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
