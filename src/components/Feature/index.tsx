import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';

export interface FeatureProps {
  name: string;
  icon?: string;
  route: string;
}

const Feature = ({ name, icon, route }: FeatureProps) => {
  return (
    <Link to={route}>
      <div className={styles.feature}>
        <span className={clsx('mdi', icon || 'mdi-file-document-outline', styles.icon)}></span>
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default Feature;
