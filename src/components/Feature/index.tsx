import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';

export interface FeatureProps {
  name: string;
  icon?: string;
  route: string;
  pages?: number;
}

const Feature = ({ name, icon, route, pages }: FeatureProps) => {
  return (
    <Link to={route}>
      <div className={styles.feature}>
        {pages === 1 && <span className={clsx(styles.pages)}><span className={clsx('mdi', 'mdi-file', styles.file)}></span></span>}
        {pages > 1 && <span className={clsx(styles.pages)}><span className={clsx('mdi', 'mdi-file-multiple', styles.file)}></span><span className={clsx(styles.number)}>{pages}</span></span>}
        <span className={clsx('mdi', icon || 'mdi-file-document-outline', styles.icon)}></span>
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default Feature;
