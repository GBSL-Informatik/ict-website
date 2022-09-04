import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
// @ts-ignore
import { useDocsSidebar, useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import Feature from '../Feature';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // @ts-ignore
import { useDoc } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-common/src/contexts/docsSidebar.tsx
import type { PropSidebar } from '@docusaurus/plugin-content-docs';
type ContextValue = { name: string; items: PropSidebar };

function MyFeature(): JSX.Element {
  const sidebar = useCurrentSidebarCategory();
  return (
    <div className={styles.features}>
      {sidebar.items.map((item, idx) => {
        if ((item.type === 'link' || item.type === 'category') && item.customProps && item.customProps.icon) {
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

export default function Features(): JSX.Element {
  const docsSidebar: ContextValue = useDocsSidebar();
  const { pathname } = useLocation();
  const mine = (docsSidebar?.items || []).find((it) => it.type !== 'html' && it.href === pathname);
  console.log('mine', docsSidebar);
  if (!mine || mine.type !== 'category') {
    return (
      <div className={styles.features}>
        <Feature icon="mdi-heart-broken" name="Keine Unterseite Gefunden 😢" route={(docsSidebar?.items.find((it) => it.type !== 'html') as {href: string})?.href || '/'} />
      </div>
    );
  }
  return <MyFeature />;
}
