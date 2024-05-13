import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import Icon from '@mdi/react';
import * as MdiIcons from '@mdi/js';
import { camelCased } from '@site/src/plugins/helpers';


export interface FeatureProps {
  name: string;
  icon?: string;
  route: string;
  pages?: number;
}

const SIZE_INDICATOR = 0.8;


const Feature = ({ name, icon, route, pages }: FeatureProps) => {
  return (
    <Link to={route}>
      <div className={styles.feature}>
        {pages === 1 && <span className={clsx(styles.pages)}><Icon path={MdiIcons.mdiFile} className={clsx(styles.file)} size={SIZE_INDICATOR}/></span>}
        {pages > 1 && <span className={clsx(styles.pages)}><Icon path={MdiIcons.mdiFileMultiple} className={clsx(styles.file)} size={SIZE_INDICATOR}/><span className={clsx(styles.number)}>{pages}</span></span>}
        <Icon path={MdiIcons[camelCased(icon || 'mdi-file-document-outline')]} className={clsx(styles.icon)} size={'4rem'} />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default Feature;
