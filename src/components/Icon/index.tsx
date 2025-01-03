import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { default as MdiIcon } from '@mdi/react';
import * as MdiIcons from '@mdi/js';
import { camelCased } from '@site/src/plugins/helpers';

interface Props {
    icon: keyof typeof MdiIcons;
    size?: string;
    caption: string;
    color?: string;
}

const Icon = (props: Props) => {
    const mdiPath = camelCased(props.icon);
    return (
        <div className={styles.icon}>
            <MdiIcon path={MdiIcons[mdiPath]} size={props.size} color={props.color} />
            <span className={clsx(styles.caption)}>{props.caption}</span>
        </div>
    );
};

export default Icon;
